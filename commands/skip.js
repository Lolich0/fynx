const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `You must be in a voice channel!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `Nothing is being played!` }})

    const song = await client.player.skip(message.guild.id);

    message.channel.send({embed: {color: embedSuccess, description: `Skipped:\n\`${song.name}\`` }})

};

module.exports.config = {
    name: "skip",
    aliases: []
};
