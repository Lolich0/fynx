const Discord = require('discord.js');
const adamlik = new Discord.ShardingManager('./index.js', { // main dosyanızın ismi: server.js - main.js - bot.js olabilir
    totalShards: 2, // shard sayısı ya da auto yazılabilir // 2k veya 1k sunucularda ideali: 2'dir.
    token: 'NTExNTkzNjU3NzExNzIyNTIz.W-m4uA.fVaMWb6mLL64ZI9dfbVF09S_BVU' // token
});

adamlik.spawn(); // S2Ş ahanda burada başlıyor

adamlik.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı gardaşım benim.`)
});

setTimeout(() => {
    console.log("yeniden başlatılıyor..")
    adamlik.broadcastEval("process.exit()"); //restart atıyoruz ki botumuz kendini yenilesin s2ş power ultisi atsın 
}, 21600000);