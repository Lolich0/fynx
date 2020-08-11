const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()//client.guilds.cache.size //client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
    .setFooter("Fynx Music © 2020", client.user.avatarURL())
    .addField("<a:coder:734885134800519288>  | **Botun Sahibi**", "<@327064201245753344>")
    .addField("<:ping:735102803340558336>  | **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<:bellek:735103897449922610>  | **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<:uptime:735102804468957284>  | **Çalışma süresi**", seksizaman, true)
    .addField("<:discordjs:735102801449058364>  | **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<:nodejs:735102802614943826>  | **Node.JS sürüm**", `${process.version}`, true)
    .addField(":microphone:  | **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
  .addField(`<:Belge:735061681197285476>  | **Sunucu Sayısı**`, client.guilds.cache.size, true)
.addField(`:family_man_girl:  | **Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField(`<:sunucu:736507254857269328>  | **Sunucu Lokasyonu**`, `<a:turkiye:734888652827656262>  Turkey, Izmir`, true)
  return message.channel.send(istatistikler);
};

exports.config = {
name: "is",
  aliases: ["i"]
};

