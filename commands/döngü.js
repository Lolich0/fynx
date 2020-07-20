const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `Şu anda hiçbir müzik çalmamaktadır!` }})

    const repeatMode = client.player.getQueue(message.guild.id).repeatMode;

    if(repeatMode){
        client.player.setRepeatMode(message.guild.id, false);
        return message.channel.send({embed: {color: embedSuccess, description: `Döngü deaktif edildi!` }})
    } else {
        client.player.setRepeatMode(message.guild.id, true);
        return message.channel.send({embed: {color: embedSuccess, description: `Döngü aktif edildi!` }})
    }
    
};

module.exports.config = {
    name: "döngü",
    aliases: [],
    permlevel: 0
};
