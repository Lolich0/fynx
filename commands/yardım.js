const { MessageEmbed } = require("discord.js");
const prefix = "!";

module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle(`Harmony - Yardım`)
    .addField(prefix + 'yardım', `Bütün komutları ve açıklamaları gösterir.`, true)
    .addField(prefix + 'oynat', `Yeniden oynatmayı açıp kapatmanızı sağlar.`, true)
    .addField(prefix + 'atla', `Çalan müziği durdurur.`, true)
    .addField(prefix + 'durdur', `Youtube'den şarkı açmanızı sağlar.`, true)
    .addField(prefix + 'duraklat', `Youtube'den oynatma listesi açmanızı sağlar.`, true)
    .addField(prefix + 'devam', `Müzik kuyruğunu gösterir.`, true)
    .addField(prefix + 'kuyruk', `Müzik kuyruğundan şarkı kaldırmanıza yarar.`, true)
    .addField(prefix + 'karıştır', `Durdurulan müziği oynatmaya devam eder.`, true)
    .addField(prefix + 'çalan', `Çalan şarkıyı geçer.`, true)
    .addField(prefix + 'kuy', `Müziği durdurur.`, true)
    .addField('Links!', `\n-[İnvite Link](https://discordapp.com/oauth2/authorize?client_id=661927248483450920&scope=bot&permissions=8)\n-[Supporter Server](https://discord.gg/CvzYypW)`)//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ//EMİRHANSARAÇ
    .setColor("#F8AA2A")
    .setTimestamp();
    return message.channel.send(embed);
  };

module.exports.config = {
    name: "yardım",
    aliases: []
};
