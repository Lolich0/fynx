const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const kuyruk = client.player.getQueue(message.guild.id);
if(!kuyruk) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? '<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müzik:** \`${song.name}\` \n**Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: FynxDogru, title: `Fynx Music Müzik Kuyruğu`, description: `${q}`}})
}
  
module.exports.config = {
    name: "kuyruk",
    aliases: []
};
