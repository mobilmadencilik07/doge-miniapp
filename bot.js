const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8226313005:AAFcQdKpDn6ohr3M3f0a79FKRzf_nHRodWA";

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(
    msg.chat.id,
    "🐶 DOGE MINI APP",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🚀 OPEN APP",
              web_app: {
                url: "https://mobilmadencilik07-doge-miniapp.vercel.app/"
              }
            }
          ]
        ]
      }
    }
  );

});

console.log("BOT ACTIVE");