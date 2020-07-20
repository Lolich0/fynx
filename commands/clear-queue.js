const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {
  
    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `Kuyruğu temizleyebilmek için bir ses kanalında olmanız gerekmektedir!` }});

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedFail, description: `Şu anda hiçbir müzik çalmamaktadır!` }})

    client.player.clearQueue(message.guild.id);

    message.channel.send({embed: {color: embedSuccess, description: `Kuyruk başarılı bir şekilde temizlendi!` }})

};

module.exports.config = {
    name: "clear-queue",
    aliases: ["cq"]
};
