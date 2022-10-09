const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host:'    host: 'mineteamuz.aternos.me',
  // port: 55637,
  username: 'Afk_miner'
 })
 
 let continue_digging = true; 
 
bot.once("spawn", () => {
  bot.chat("/login komiljon");
})


bot.on('chat', (username, message) => {
  if (message == 'digyoungerbot') {
    continue_digging=true;
    dig()  
  }
})

async function dig() {
  if(!continue_digging){return};
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0]; 
  if (pickaxe) await bot.equip(pickaxe, 'hand')
  }
  var block = bot.blockAtCursor(4);
  if (!block) return setTimeout (function () { dig(); }, 100);
  await bot.dig(block, 'ignore')
  dig()
}
