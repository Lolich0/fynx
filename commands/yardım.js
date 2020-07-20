const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
 //OSKOBS
  let sayfalar = ['İlk Sayfa', '2.Sayfa', '3.Sayfa', '4.Sayfa']; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Harmony Yardım Menüsü") 
    .setColor("BLUE")
    .setDescription(`Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz. Sizler sayesinde botumuz daha iyi yerlere geliyor. Umarım botumuzu beğenerek kullanıyorsunuzdur. Eksiklerimiz veya hatalarımızı \`!tavsiye\` komutu ile bizimle paylaşabilirsiniz.`)
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 

  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Harmony Yardım Menüsü")
        embed.setDescription(`Yardım menüsünü görmeden önce Harmony'i kullandığınız için sizlere teşekkür ederiz. Sizler sayesinde botumuz daha iyi yerlere geliyor. Umarım botumuzu beğenerek kullanıyorsunuzdur. Eksiklerimiz veya hatalarımızı \`!tavsiye\` komutu ile bizimle paylaşabilirsiniz.`); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("RED") 
        msg.edit(embed) 
      })
 //OSKOBS    
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Harmony Yardım Menüsü")
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
