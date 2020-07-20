const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})

    const queue = client.player.getQueue(message.guild.id);

    if(!queue) return message.channel.send({embed: {color: embedFail, description: `Şu anda hiçbir müzik çalmamaktadır!` }})

    let q = queue.songs.map((song, i) => {
        return `${i === 0 ? 'Şu Anda Çalınan Müzik' : `${i+1}`}- \`${song.name} : ${song.author}\``
    }).join('\n');  
       message.channel.send({embed: {color: embedSuccess, description: `${q}` }})
}

  
module.exports.config = {
    name: "kuyruk",
    aliases: [],
    permlevel: 0
};
