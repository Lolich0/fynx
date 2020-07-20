const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `Ses seviyesini ayarlayabilmek için bir ses kanalında Keyifli dinlemelerız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `Nothing is being played!` }})
    if(!args[0]) return message.channel.send({embed: {color: embedFail, description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. `}})
    if(isNaN(args[0])) return message.channel.send({embed: {color: embedFail, description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. ` }})
   if (args > 100) return message.channel.send({embed: {color: embedFail, description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. `}})
  if (args < 0) return message.channel.send({embed: {color: embedFail, description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. ` }})
  ,
  

    client.player.setVolume(message.guild.id, parseInt(args.join(" ")));

    message.channel.send({embed: {color: embedSuccess, description: `Ses seviyesi \`${args.join(" ")}\` olarak ayarlandı. Keyifli dinlemeler!` }})


};

module.exports.config = {
    name: "ses",
    aliases: ["ses-seviyesi"]
};
