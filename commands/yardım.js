const { MessageEmbed } = require("discord.js");
const prefix = "!";

module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle(`Harmony - Yardım`)
    .addField(prefix + 'yardım', `Bütün komutları ve açıklamaları gösterir.`)
    .addField(prefix + 'oynat <Şarkı İsmi>', `Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır.`, true)
    .addField(prefix + 'durdur', `Harmony müzik oynatmayı durdurur ve ses kanalından ayrılır.`)    
    .addField(prefix + 'atla', `Oynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır.`, true)
    .addField(prefix + 'duraklat', `Oynatılan olan müziği duraklatır.`)
    .addField(prefix + 'devam', `Duraklatılan müziği devam ettirir.`, true)
    .addField(prefix + 'karıştır', `Müzik kuyruğundaki müzikleri karıştırır.`)
    .addField(prefix + 'döngü', `Müzik kuyruğundaki müzikleri döngü içerisine alır.`, true)    
    .addField(prefix + 'çalan', `Oynatılan olan müziği gösterir.`)
    .addField(prefix + 'kuyruk', `Müzik kuyruğunu gösterir.`, true)
    .addField(prefix + 'kuyruğu-temizle', `Müzik kuyruğunu temizler.`)
    .addField('Harmony Bot', `\n-[Botu Davet Et!](https://discordapp.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)\n-[Destek Sunucusu](https://discord.com/app)`)
    .setColor("#F8AA2A")
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp();
    return message.channel.send(embed);
  };

module.exports.config = {
    name: "yardım",
    aliases: ["y"]
};
