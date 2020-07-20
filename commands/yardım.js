const Discord = require('discord.js');
const client = new Discord.Client();
 
module.exports.run = (client, message, args) => {
 
  let pages = [
              "Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz. \nSizler sayesinde botumuz daha iyi yerlere geliyor. \nUmarım botumuzu beğenerek kullanıyorsunuzdur. \nEksiklerimiz veya hatalarımızı `!tavsiye` komutu ile bizimle paylaşabilirsiniz.",
              '**`!yardım`**\nBütün komutları ve açıklamaları gösterir. \n\n **`!oynat <Şarkı İsmi>`**\nBelirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n **`!durdur`**\nHarmony müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n  **`!atla`**\nOynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n **`!duraklat`**\nOynatılan olan müziği duraklatır. \n\n **`!devam`**\nDuraklatılan müziği devam ettirir.',
              '**`!karıştır`**\nMüzik kuyruğundaki müzikleri karıştırır. \n\n **`!döngü`**\nMüzik kuyruğundaki müzikleri döngü içerisine alır. \n\n **`!çalan`**\nOynatılan olan müziği gösterir.\n\n  **`!kuyruk`**\nMüzik kuyruğunu gösterir. \n\n **`!kuyruğu-temizle`**\nMüzik kuyruğunu temizler.\n\n **`!ses <0/100>`**\nMüzik kuyruğunu temizler.(BAKIMDA)',
              '[Harmony`i Sunucunuza Ekleyin!](https://discordapp.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)\n\n[Harmony Destek Sunucusu](https://discord.com/app)\n\n[Harmony Twitter Hesabı](https://twitter.com/harmonybot)\n\n[Harmony Yapımcı İnstagram`ı](https://instagram.com/m_arda_dusova)',
              ];
  let page = 1;
 
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/703582257570644029/734646429833756732/HarmonyMusic.png')
    .setAuthor(`Harmony Yardım Menüsü`, client.user.avatarURL)
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {
 
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
 
    })
  })
};
 
 
module.exports.config = {
name: 'yardım',
aliases: ["help", "y", "h"],
    permlevel: 0
};
 
