const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Şu anda oynatılan bir müziği görebilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})

    const song = await client.player.nowPlaying(message.guild.id);

    message.channel.send({embed: {color: embedSuccess, description: `Şu Anda Çalınan Müzik:\n\`${song.name}\`` }})

};

module.exports.config = {
    name: "çalan",
    aliases: [],
    permlevel: 0
};
