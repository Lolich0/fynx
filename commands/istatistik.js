const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
 
  let msg = message
   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setFooter('GuardMayFe  \'Buyur benim istatistiklerim', bot.user.avatarURL())
  .addField("» **Botun Sahibi**", "<402047297963294730>| ByMayFe_0#2956  ")
  .addField("»  **Geliştirici** ","<373493092881530887>| seyfttnbdk_0#3548 ")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", bunemq)
  .addField('» **Müzik Çalınan Sunucu Sayısı**;', bot.voiceConnections.size)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=597419749995053056&scope=bot&permissions=2146958847)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/fqdsZPd)", )
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?](https://top.gg/bot/596071936799277116/vote)", )
   //mayfeBot
 return message.channel.send(annencilermaldır);
  };
 
exports.config = {

  name: "istatistik",
  aliases: ['i']
};
 
