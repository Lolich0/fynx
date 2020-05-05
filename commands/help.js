
const { RichEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
   const help = new RichEmbed()
    .addField('kick','Kicks a user mentioned')
    .addField('ban','Bans a user mentioned')
    .addField('report','Reports a user and it goes to logs')
    .addField('tempmute','Mutes a user')
    message.channel.send(help)
}
 
module.exports.help = {
  name: "help"
}