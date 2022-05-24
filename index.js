const TelegramAPI = require('node-telegram-bot-api');

const Token = '5354605814:AAGlri0G4pjs5nNzQpZjcKMEDMJfK-mQrnc'
const bot = new TelegramAPI(Token, {polling:true})

bot.on('message', (msg) => {
var chatid = msg.chat.id

if(msg.text == '/start'){
    bot.sendMessage(chatid,
        
        `Hello👋🏼
I'm going to take you through 30 questions to find out your English level 📚🎓
Please be patient and carefully reply to all the questions🙏🏼
The test will take no more than 20 minutes😊
Good luck🤞🏼`)
}
  });

