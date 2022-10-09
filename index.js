const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'mineteamuz.aternos.me',
    port: 55637,
    version: 1.17,
    username: 'Afk_miner'
})

bot.once("spawn", () => {
  bot.chat("/login komiljon");
})

bot.on('bot',(username,message)=>{
  if(message == 'salom'){
  bot.chat('Serverga xush kelibsiz ${username}')
  })
