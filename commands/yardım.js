const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
  const prefix = '!';

  let sayfalar = ['İlk Sayfa', '2.Sayfa', '3.Sayfa']; 
  let page = 1; 

  const embed = new Discord.MessageEmbed()
    .setTitle("Harmony Yardım Menüsü") 
    .setDescription(`Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz. \nSizler sayesinde botumuz daha iyi yerlere geliyor. \nUmarım botumuzu beğenerek kullanıyorsunuzdur. \nEksiklerimiz veya hatalarımızı \`!tavsiye\` komutu ile bizimle paylaşabilirsiniz.`)
    .setColor("BLUE")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 

  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      forwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Harmony Yardım Menüsü")
        embed.setDescription(`Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz. \nSizler sayesinde botumuz daha iyi yerlere geliyor. \nUmarım botumuzu beğenerek kullanıyorsunuzdur. \nEksiklerimiz veya hatalarımızı \`!tavsiye\` komutu ile bizimle paylaşabilirsiniz.`)
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("RED") 
        msg.edit(embed) 
      })
 //OSKOBS    
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Harmony Yardım Menüsü")
embed.addField(prefix + 'yardım', `Bütün komutları ve açıklamaları gösterir.`)
    embed.addField(prefix + 'oynat <Şarkı İsmi>', `Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır.`, true)
    embed.addField(prefix + 'durdur', `Harmony müzik oynatmayı durdurur ve ses kanalından ayrılır.`)    
    embed.addField(prefix + 'atla', `Oynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır.`, true)
    embed.addField(prefix + 'duraklat', `Oynatılan olan müziği duraklatır.`)
    embed.addField(prefix + 'devam', `Duraklatılan müziği devam ettirir.`, true)
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("RED") 
        msg.edit(embed) 
      })
      
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Harmony Yardım Menüsü")
                  embed.addField(prefix + 'karıştır', `Müzik kuyruğundaki müzikleri karıştırır.`)
    embed.addField(prefix + 'döngü', `Müzik kuyruğundaki müzikleri döngü içerisine alır.`, true)    
    embed.addField(prefix + 'çalan', `Oynatılan olan müziği gösterir.`)
    embed.addField(prefix + 'kuyruk', `Müzik kuyruğunu gösterir.`, true)
    embed.addField(prefix + 'kuyruğu-temizle', `Müzik kuyruğunu temizler.`)
    embed.addField(prefix + 'prefix', `Prefix(Ön Ek)'i değiştirirsiniz.`)
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("BLUE") 
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.config = {
 name: 'yardım',
  aliases: ["sayfalıyardım","pagehelp","h","help"],

};
