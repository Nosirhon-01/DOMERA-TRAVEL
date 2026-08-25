import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

// Load .env variables manually in dev plugin
function loadEnvVars() {
  const envPath = path.resolve(process.cwd(), '.env');
  const vars = {};
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...vals] = trimmed.split('=');
        if (key) vars[key.trim()] = vals.join('=').trim();
      }
    });
  }
  return vars;
}

function telegramApiPlugin() {
  return {
    name: 'telegram-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/booking', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 455;
          return res.end(JSON.stringify({ error: 'Method not allowed' }));
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { fullName, phone, destination, destinationType, count, travelDate, comment } = data;

            if (!fullName || !phone || !destination) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ success: false, message: 'Ism, telefon va yo‘nalish kiritilishi shart.' }));
            }

            const envVars = loadEnvVars();
            const rawBotToken = process.env.TELEGRAM_BOT_TOKEN || envVars.TELEGRAM_BOT_TOKEN || '';
            const rawAdminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID || envVars.TELEGRAM_ADMIN_CHAT_ID || '';

            // Clean quote marks and potential 'bot' prefix
            let botToken = rawBotToken.trim().replace(/^["']|["']$/g, '');
            if (botToken.toLowerCase().startsWith('bot')) {
              botToken = botToken.slice(3).trim();
            }

            const adminChatId = rawAdminChatId.trim().replace(/^["']|["']$/g, '');

            const messageText = `🔔 <b>YANGI MIJOZ</b>\n\n` +
              `👤 <b>Ism:</b> ${fullName}\n` +
              `📞 <b>Telefon:</b> ${phone}\n` +
              `🌍 <b>Yo‘nalish:</b> ${destination} ${destinationType ? `(${destinationType})` : ''}\n` +
              `👥 <b>Necha kishi:</b> ${count || 'Belgilanmagan'}\n` +
              `📅 <b>Sayohat sanasi:</b> ${travelDate || 'Belgilanmagan'}\n` +
              `💬 <b>Izoh:</b> ${comment || 'Yo‘q'}`;

            if (botToken && adminChatId) {
              try {
                const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    chat_id: adminChatId,
                    text: messageText,
                    parse_mode: 'HTML',
                  }),
                });
                const tgJson = await tgRes.json();
                if (!tgJson.ok) {
                  console.error('Telegram API error:', tgJson);
                } else {
                  console.log('✅ Telegram message sent successfully!');
                }
              } catch (tgErr) {
                console.error('Failed to send Telegram message:', tgErr);
              }
            } else {
              console.log('--- NEW BOOKING RECEIVED (Dev Mode Log) ---');
              console.log(messageText);
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({
              success: true,
              message: 'Bron qilish so‘rovingiz qabul qilindi! DOMERA TRAVEL menejeri tez orada siz bilan bog‘lanadi.'
            }));
          } catch (err) {
            console.error('Vite middleware error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ success: false, message: 'Server error' }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), telegramApiPlugin()],
});
