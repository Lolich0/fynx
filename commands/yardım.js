const Discord = require('discord.js');
const client = new Discord.Client();
 
module.exports.run = (client, message, args) => {
 
  let pages = [
              "**Kullanıcılar bilginize;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n<a:coder:734885134800519288>  Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n<:developer:734885133684965428>  Eksiklerimiz veya hatalarımızı `!tavsiye` komutu ile bizimle paylaşabilirsiniz.",
              '**`!yardım`**\n<a:secenek:733987076718198864>  Bütün komutları ve açıklamaları gösterir. \n\n **`!oynat <Şarkı İsmi>`**\n<a:secenek:733987076718198864>  Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n **`!durdur`**\n<a:secenek:733987076718198864>  Harmony müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n  **`!atla`**\n<a:secenek:733987076718198864>  Oynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n **`!duraklat`**\n<a:secenek:733987076718198864>  Oynatılan olan müziği duraklatır. \n\n **`!devam`**\n<a:secenek:733987076718198864>  Duraklatılan müziği devam ettirir.',
              '**`!karıştır`**\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri karıştırır. \n\n **`!döngü`**\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n **`!çalan`**\n<a:secenek:733987076718198864>  Oynatılan olan müziği gösterir.\n\n  **`!kuyruk`**\n<a:secenek:733987076718198864>  Müzik kuyruğunu gösterir. \n\n **`!kuyruğu-temizle`**\n<a:secenek:733987076718198864>  Müzik kuyruğunu temizler.\n\n **`!ses <0/100>`**\n<a:secenek:733987076718198864>  Müzik kuyruğunu temizler.(BAKIMDA)',
              '<:bot:734888733853089903>  | [Harmony`i Sunucunuza Ekleyin!](https://discordapp.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)\n\n<:discord:734888645722636441>  | [Harmony Destek Sunucusu](https://discord.com/app)\n\n<a:twitter:734888743277953077>  | [Harmony Twitter Hesabı](https://twitter.com/harmonybot)\n\n<:instagram:734889120848937011>  | [Harmony Yapımcı İnstagram`ı](https://instagram.com/m_arda_dusova)',
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
 
