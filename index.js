const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'mineteamuz.aternos.me',
    port: 55637,
    version: 1.17,
    username: 'Afk_miner'
})

let password = "komiljon" // sizning parolingiz

bot.on('messagestr', (message) => {
    console.log(message)

    if (message.includes("/register")) {
        bot.chat(`/register ${password} ${password}`)
    }
    
    if (message.includes("/login")) {
        bot.chat(`/login ${password}`)
    }
})

bot.on('bot',(username,message)=>{
  if(message == 'salom'){
  bot.chat('Serverga xush kelibsiz ${username}')
  })