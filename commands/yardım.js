const Discord = require('discord.js'); 
 
module.exports.run = async(client, message, args) => {
 //OSKOBS
  let sayfalar = ['İlk Sayfa', '2.Sayfa', 'OOO 3.Yardım Sayfası']; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Harmony Yardım Menüsü") 
    .setColor("BLUE")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
 
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
        embed.setTitle("Yardım Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("RED") 
        msg.edit(embed) 
      })
 //OSKOBS    
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Sayfalı Yardım Menüsü")
        embed.setDescription(sayfalar[page-1]); 
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
