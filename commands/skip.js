const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `Oynatılan bir müziği atlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `Şu anda hiçbir müzik çalmamaktadır!` }})

    const song = await client.player.skip(message.guild.id);

    message.channel.send({embed: {color: embedSuccess, description: `Müzik Atlandı:\n\`${song.name}\`` }})

};

module.exports.config = {
    name: "skip",
    aliases: ["s", "atla", "geç"]
};
