const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `You must be in a voice channel!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `Nothing is being played!` }})
    if(!args[0]) return message.channel.send({embed: {color: embedFail, description: `Please enter a number!` }})
    if(isNaN(args[0])) return message.channel.send({embed: {color: embedFail, description: `Please enter a valid number!` }})
   if (volume > 150) return message.channel.send({embed: {color: client.colors.error, description: `Volume can be only between \`150\` - \`20\`` }})
  if (volume < 20) return message.channel.send({embed: {color: client.colors.error, description: `Volume can be only between \`150\` - \`20\`` }})
  
  
    client.player.setVolume(message.guild.id, volume)

    client.player.setVolume(message.guild.id, parseInt(args.join(" ")));

    message.channel.send("**Volume set to** `" +  args.join(" ") + "`" + `** ** ${emotes.success}`);


};

module.exports.config = {
    name: "set-volume",
    aliases: []
};
