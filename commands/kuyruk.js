const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})

    const queue = client.player.getQueue(message.guild.id);


    if(!queue) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})

    let q = queue.songs.map((song, i) => {
        return `${i === 0 ? '<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müzik:** \`${song.name}\` \n**Kanal:** \`${song.author}\`\n**Tarafından İstendi:** \`${song.requestedBy}\``
    }).join('\n');  
       message.channel.send({embed: {color: embedSuccess, description: `${q}`, thumbnail: `https://cdn.discordapp.com/attachments/703582257570644029/734646429833756732/HarmonyMusic.png`}})
};

  
module.exports.config = {
    name: "kuyruk",
    aliases: [],
    permlevel: 0
};