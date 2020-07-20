const Discord = require('discord.js');
const client = new Discord.Client();
 
module.exports.run = (client, message, args) => {
 
  let pages = [
              "Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz. \nSizler sayesinde botumuz daha iyi yerlere geliyor. \nUmarım botumuzu beğenerek kullanıyorsunuzdur. \nEksiklerimiz veya hatalarımızı `!tavsiye` komutu ile bizimle paylaşabilirsiniz.",
              '**`!yardım`**\nBütün komutları ve açıklamaları gösterir. \n\n **`!oynat <Şarkı İsmi>`**\nBelirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n **`!durdur`**\nHarmony müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n  **`!atla`**\nOynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n **`!duraklat`**\nOynatılan olan müziği duraklatır. \n\n **`!devam`**\nDuraklatılan müziği devam ettirir.',
              '**Müzik**\n\n\n' + '``-``  .oynat = Youtubeda İstediğiniz Bir Şarkıyı Aratır Ve Oynatır. \n``-``  .duraklat = Oynatılan Şarkıyı Devam Etmek Üzere Durdurur. \n``-``  .devamet = Duraklatılan Şarkıyı Devam Ettir. \n``-``  .geç = Oynatılan Şarkıyı Geçer. \n``-``  .kuyruk = Kuyruk’ta Olan Müzikleri Gösterir. \n``-``  .çalan = Oynatılan Müziği Gösterir. \n``-``  .ses = Ses Seviyesini Ayarlarsınız.',
              '**Çerçeve/Profil**\n\n\n ' + '``-``  .hacked = Profilinize ``hacked`` Efekti Verir. \n``-``  .triggered = Profilinize ``triggered`` Efekti Verir. \n``-``  .wasted = Profilinize ``wasted`` Efekti Verir. \n``-``  .winner = Profilinize ``winner`` Efekti Verir. \n``-``  .sniper = Profilinize ``sniper`` Efekti Verir. \n``-``  .hpbalance = Profilinize ``hypesquad balance`` Efekti Verir. \n``-``  .hpbravery = Profilinize ``hypesquad bravery`` Efekti Verir. \n``-``  .hpbrilliance = Profilinize ``hypesquad brilliance`` Efekti Verilir. \n``-``  .dcbughunter = Profilinize ``bug hunter`` Efekti Verir. \n``-``  .hpevent = Profilinize ``hypesquad`` Efekti Verir. \n``-``  .dcpartner = Profilinize ``partner`` Efekti Verir. \n``-``  .dcstaff = Profilinize ``staff`` Efekti Verir. \n``-``  .atatürk = Profilinize ``atatürk`` Efekti Verir.',
              '**Bot Bilgi**\n\n\n' + '``-``  .davet = Bot İle İlgili Bağlantıları Görürsünüz. \n``-``  .ping = Botun Pingini Gösterir. \n``-``  .istatistik = Bo n İstatistiklerini Gösterir.',
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
};
 
