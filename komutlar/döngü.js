const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})

    const repeatMode = client.player.getQueue(message.guild.id).repeatMode;

    if(repeatMode){
        client.player.setRepeatMode(message.guild.id, false);
        return message.channel.send({embed: {color: embedSuccess, description: `<a:tik:734892939737694239>  | Döngü deaktif edildi!` }})
    } else {
        client.player.setRepeatMode(message.guild.id, true);
        return message.channel.send({embed: {color: embedSuccess, description: `<a:tik:734892939737694239>  | Döngü aktif edildi!` }})
    }
    
};

module.exports.config = {
    name: "döngü",
    aliases: [],
    permlevel: 0
};
