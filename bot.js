const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8226313005:AAE3Z-mLfWUv-RcnhYJpOi8-jZm9qnS0Pdw";

const bot = new TelegramBot(TOKEN, { polling:true });

bot.onText(/\/start/, (msg)=>{

  bot.sendMessage(
    msg.chat.id,
    "🐶 DOGE MINI APP",
    {
      reply_markup:{
        inline_keyboard:[
          [
            {
              text:"🚀 OPEN APP",
              web_app:{
                url:"https://BURAYA_VERCEL_LINK"
              }
            }
          ]
        ]
      }
    }
  );

});

console.log("BOT ACTIVE");