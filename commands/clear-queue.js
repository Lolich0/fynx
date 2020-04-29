const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {
  
    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `You must be in a voice channel!` }});

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `There is nothing playing!` }})

    client.player.clearQueue(message.guild.id);

    message.channel.send({embed: {color: embedSuccess, description: `Queue cleared!` }})

};

module.exports.config = {
    name: "clear-queue",
    aliases: ["cq"]
};
