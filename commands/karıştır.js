const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Kuyruğu karıştırabilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})

    client.player.shuffle(message.guild.id);
    return message.channel.send({embed: {color: embedSuccess, description: `<a:tik:734892939737694239>  | Kuyruk karıştırıldı!` }})
    
};

module.exports.config = {
    name: "karıştır",
    aliases: [],
    permlevel: 0
};
