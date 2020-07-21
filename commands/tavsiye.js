const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('Tavsiye bildirimi için bir şeyler yazmanız gerekmektedir!')

const embed = new Discord.MessageEmbed()
.setTitle("Harmony Music Tavsiye")
.setColor('RED')
.setDescription(`**Tavsiyede bulunan:** <@${message.author.id}> \n **Tavsiye:** \`${istek}\``)
.setFooter(`Harmony Music`)
client.channels.cache.get('735225660188131358').send(embed)
  
message.channel.send("Tavsiyeniz gönderildi.").then(message => message.delete(6000));
message.delete(10)
};
exports.config = {
  name: 'tavsiye',
  aliases: [],
  permLevel: 0  
};