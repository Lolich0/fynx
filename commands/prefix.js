const db = require('quick.db');
const Discord = require('discord.js')

module.exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)

    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send('Ayarlanmayan Şeyi Sıfırlayamazsın.')
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send('Prefix Başarıyla Sıfırlandı. ')
    return
  }
  
  if (!args[0]) return message.channel.send('Prefix Ayarlamak İçin Bir Prefix Girmelisin')
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`Prefix başarı ile ${args[0]} olarak ayarlandı.`)
  
};

module.exports.config = {
    name: 'prefix-ayarla',
    aliases: ['prefixayarla', 'prefix'],
    permLevel: 0
};
  



