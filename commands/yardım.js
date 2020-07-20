const { MessageEmbed } = require("discord.js");
const prefix = "!";

module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle(`Harmony - Yardım`)
    .addField(prefix + 'yardım', `Bütün komutları ve açıklamaları gösterir.`, true)
    .addField(prefix + 'oynat <Şarkı İsmi>', `.`, true)
    .addField(prefix + 'durdur', `Harmony müzik oynatmayı durdurur ve ses kanalından ayrılır.`, true)    
    .addField(prefix + 'atla', `Oynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır.`, true)
    .addField(prefix + 'duraklat', `Oynatılan olan müziği duraklatır.`, true)
    .addField(prefix + 'devam', `Duraklatılan müziği devam ettirir.`, true)
    .addField(prefix + 'karıştır', `Müzik kuyruğundaki müzikleri karıştırır.`, true)
    .addField(prefix + 'döngü', `Müzik kuyruğundaki müzikleri döngü içerisine alır.`, true)    
    .addField(prefix + 'çalan', `Oynatılan olan müziği gösterir.`, true)
    .addField(prefix + 'kuyruk', `Müzik kuyruğunu gösterir.`, true)
    .addField(prefix + 'kuyruğu-temizle', `Müzik kuyruğunu temizler.`, true)
    .addField('Harmony Bot', `\n-[Botu Davet Et!](https://discordapp.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)\n-[Destek Sunucusu](https://discord.com/app)`)
    .setColor("#F8AA2A")
    .setTimestamp();
    return message.channel.send(embed);
  };

module.exports.config = {
    name: "yardım",
    aliases: ["y"]
};
