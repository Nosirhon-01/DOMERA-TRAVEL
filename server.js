import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Bot, ReplyKeyboardBuilder } from 'node-telegram-bot-api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const rawBotToken = process.env.TELEGRAM_BOT_TOKEN || '';
let botToken = rawBotToken.trim().replace(/^["']|["']$/g, '');
if (botToken.toLowerCase().startsWith('bot')) {
  botToken = botToken.slice(3).trim();
}

const rawAdminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID || '';
const adminChatId = rawAdminChatId.trim().replace(/^["']|["']$/g, '');

let bot = null;
if (botToken) {
  // Initialize Telegram bot with new v2 syntax
  bot = new Bot(botToken);

  // User state map
  const userStates = new Map();

  // Handle /start command
  bot.command("start", (ctx) => {

  userStates.delete(ctx.message.chat.id); // Reset state

  ctx.reply(
    `🌍 *DOMERA TRAVEL botiga xush kelibsiz!* ✈️

Assalomu alaykum! 👋
Sizni DOMERA TRAVEL rasmiy botida ko‘rib turganimizdan mamnunmiz.

Bu yerda siz o‘zingiz uchun qulay yo‘nalishni tanlashingiz, sayohat haqida ma’lumot olishingiz va *oson va tez bron qilishingiz* mumkin. 🌴🏨✈️

Sayohatingizni biz bilan boshlang!
*DOMERA TRAVEL — orzudagi sayohatingiz sari birinchi qadam.* 🌍✨`,
    {
      parse_mode: "Markdown",
      reply_markup: new ReplyKeyboardBuilder()
        .text("📅 Bron qilish")
        .build({ resize_keyboard: true })
    }
  );

});
  
  // Handle text messages and state transitions
  bot.on("message", async (ctx) => {
    const chatId = ctx.message.chat.id;
    const text = ctx.message.text?.trim() || "";
    const contact = ctx.message.contact;

    if (text === "/start") return; // Handled by bot.command

    // Start booking
    if (text === "📅 Bron qilish") {
      userStates.set(chatId, { step: "AWAITING_NAME" });
      return ctx.reply("Ismingizni kiriting (Masalan: Alisher):", {
        reply_markup: { remove_keyboard: true } // Remove standard keyboard
      });
    }

    const state = userStates.get(chatId);
    if (!state) return; // Ignore messages if user is not in a flow

    if (state.step === "AWAITING_NAME") {
      // Must ignore non-text here, but usually it's fine
      if (!text && !contact) return;
      state.fullName = text;
      state.step = "AWAITING_PAX";
      return ctx.reply("Necha kishilik sayohat qilmoqchisiz?");
    }

    if (state.step === "AWAITING_PAX") {
      if (!text && !contact) return;
      state.count = text;
      state.step = "AWAITING_DESTINATION";

      return ctx.reply(
        `🌍 *Sayohat yo‘nalishini tanlang!*

Qaysi yo‘nalishga sayohat qilmoqchisiz? ✈️

*Mavjud yo‘nalishlar:*

1. Phuket
2. Misr
3. Vetnam
4. Ozarbayjon
5. O‘zbekiston
6. Turkiya
7. Dubai
8. BAA
9. Qatar
10. Maldiv orollari

👇 Quyidagi raqamlardan birini tanlang:`,
        {
          parse_mode: "Markdown",
          reply_markup: {
            keyboard: [
              ["1", "2", "3", "4", "5"],
              ["6", "7", "8", "9", "10"]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
          }
        }
      );
    }

    if (state.step === "AWAITING_DESTINATION") {
      if (!text && !contact) return;
      const destinations = {
        "1": "Phuket",
        "2": "Misr",
        "3": "Vetnam",
        "4": "Ozarbayjon",
        "5": "O‘zbekiston",
        "6": "Turkiya",
        "7": "Dubai",
        "8": "BAA",
        "9": "Qatar",
        "10": "Maldiv orollari"
      };

      const cleanText = text.replace(/[^0-9]/g, '');
      const destination = destinations[cleanText] || destinations[text];

      if (!destination) {
        return ctx.reply("⚠️ Iltimos, 1 dan 10 gacha bo‘lgan raqamlardan birini tanlang.");
      }

      state.destination = destination;
      state.step = "AWAITING_PHONE";
      
      return ctx.reply(`✅ ${destination} yo‘nalishi tanlandi! ✈️\n\nTelefon raqamingizni pastdagi tugma orqali yuboring yoki kiriting:\n(Masalan: +998 90 123 45 67)`, {
        reply_markup: {
          keyboard: [[{ text: "📱 Telefon raqamimni yuborish", request_contact: true }]],
          resize_keyboard: true,
          one_time_keyboard: true
        }
      });
    }

    if (state.step === "AWAITING_PHONE") {
      const p = contact ? contact.phone_number : text;
      if (!p) return;
      
      const cleanPhone = p.replace(/[^0-9+]/g, '');
      if (!/^\+?998[0-9]{9}$/.test(cleanPhone)) {
        return ctx.reply("⚠️ Telefon raqami noto‘g‘ri ko‘rinmoqda.\nIltimos, telefon raqamingizni qayta yuboring.\nMasalan: +998 90 123 45 67");
      }

      state.phone = p;
      state.step = "AWAITING_TRAVEL_DATE";
      
      return ctx.reply(`✅ Telefon raqamingiz qabul qilindi!\n\n📅 Taxminiy sayohat sanangizni kiriting.\nMasalan: 15-sentabr\n\nAgar hali aniq bilmasangiz:\n"Keyinroq aniqlayman" deb yozishingiz mumkin.`, {
        reply_markup: { remove_keyboard: true }
      });
    }

    if (state.step === "AWAITING_TRAVEL_DATE") {
      if (!text && !contact) return;
      state.travelDate = text;
      state.step = "AWAITING_COMMENT";

      return ctx.reply(`💬 Qo‘shimcha istak yoki izohingiz bormi?\nMasalan: "Dengiz bo‘yidagi mehmonxona kerak"\n\nAgar izohingiz bo‘lmasa:\n"Yo‘q" deb yozing.`);
    }

    if (state.step === "AWAITING_COMMENT") {
      if (!text && !contact) return;
      state.comment = text;
      state.step = "CONFIRM_BOOKING";

      return ctx.reply(
        `📋 *BRON MA'LUMOTLARI*\n\n` +
        `👤 Ism: ${state.fullName}\n` +
        `📞 Telefon: ${state.phone}\n` +
        `👥 Kishi soni: ${state.count}\n` +
        `🌍 Yo‘nalish: ${state.destination}\n` +
        `📅 Sayohat sanasi: ${state.travelDate}\n` +
        `💬 Izoh: ${state.comment}\n\n` +
        `Ma’lumotlar to‘g‘rimi?`,
        {
          parse_mode: "Markdown",
          reply_markup: {
            keyboard: [
              ["✅ Tasdiqlash"],
              ["✏️ O‘zgartirish", "❌ Bekor qilish"]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
          }
        }
      );
    }

    if (state.step === "CONFIRM_BOOKING") {
      if (!text && !contact) return;
      
      if (text === "✅ Tasdiqlash") {
        userStates.delete(chatId);
        
        await ctx.reply("Hozir 4-5 daqiqa ichida menejerimiz aloqaga chiqadi.\n\nQo'llab quvvatlash (ADMIN): @domeratravel", {
          reply_markup: new ReplyKeyboardBuilder()
            .text("📅 Bron qilish")
            .build({ resize_keyboard: true })
        });

        if (adminChatId) {
          const messageText = `🔔 <b>YANGI MIJOZ — DOMERA TRAVEL</b>\n\n` +
            `🆔 <b>Bron:</b> DOM-${Math.floor(100000 + Math.random() * 900000)}\n\n` +
            `👤 <b>Ism:</b> ${state.fullName}\n\n` +
            `📞 <b>Telefon:</b> ${state.phone}\n\n` +
            `🌍 <b>Yo‘nalish:</b> ${state.destination}\n\n` +
            `👥 <b>Kishi soni:</b> ${state.count}\n\n` +
            `📅 <b>Sayohat sanasi:</b> ${state.travelDate}\n\n` +
            `💬 <b>Izoh:</b> ${state.comment}`;
          
          bot.api.sendMessage({
            chat_id: adminChatId,
            text: messageText,
            parse_mode: 'HTML',
          }).catch(err => console.error("Error sending to admin:", err));
        }
      } else {
        userStates.delete(chatId);
        return ctx.reply("Bron qilish bekor qilindi yoki o'zgartirish tanlandi. Boshidan boshlash uchun '📅 Bron qilish' tugmasini bosing.", {
          reply_markup: new ReplyKeyboardBuilder()
            .text("📅 Bron qilish")
            .build({ resize_keyboard: true })
        });
      }
    }
  });

  bot.startPolling().catch(err => {
    console.error("Bot startPolling error:", err);
  });
  
  console.log('Telegram bot listener started.');
} else {
  console.log('TELEGRAM_BOT_TOKEN is not set. Bot listener not started.');
}

// Telegram API Booking Handler
app.post('/api/booking', async (req, res) => {
  try {
    const { fullName, phone, destination, destinationType, count, travelDate, comment } = req.body;

    if (!fullName || !phone || !destination) {
      return res.status(400).json({ success: false, message: 'Ism, telefon va yo‘nalish kiritilishi shart.' });
    }

    const messageText = `🔔 <b>YANGI MIJOZ</b>\n\n` +
      `👤 <b>Ism:</b> ${fullName}\n` +
      `📞 <b>Telefon:</b> ${phone}\n` +
      `🌍 <b>Yo‘nalish:</b> ${destination} ${destinationType ? `(${destinationType})` : ''}\n` +
      `👥 <b>Necha kishi:</b> ${count || 'Belgilanmagan'}\n` +
      `📅 <b>Sayohat sanasi:</b> ${travelDate || 'Belgilanmagan'}\n` +
      `💬 <b>Izoh:</b> ${comment || 'Yo‘q'}`;

    if (botToken && adminChatId) {
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: adminChatId,
          text: messageText,
          parse_mode: 'HTML',
        }),
      });

      const result = await response.json();

      if (!result.ok) {
        console.error('Telegram API error:', result);
        return res.status(500).json({ success: false, message: 'Telegram API ga yuborishda xatolik yuz berdi.' });
      }
    } else {
      console.log('--- NEW BOOKING RECEIVED (Telegram Token / Chat ID not set) ---');
      console.log(messageText);
    }

    return res.json({
      success: true,
      message: 'Bron qilish so‘rovingiz qabul qilindi! DOMERA TRAVEL menejeri tez orada siz bilan bog‘lanadi.'
    });
  } catch (error) {
    console.error('Booking server error:', error);
    return res.status(500).json({ success: false, message: 'Server xatoligi yuz berdi.' });
  }
});

app.listen(PORT, () => {
  console.log(`DOMERA TRAVEL backend server running on port ${PORT}`);
});
