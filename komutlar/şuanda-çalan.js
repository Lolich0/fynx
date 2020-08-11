const embedRenk = "#36393e";
const embedBasarili = "#22BF41";
const embedBasarisiz = "#f30707";
const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const song = await client.player.nowPlaying(message.guild.id);
  
  const embeeddd = new Discord.MessageEmbed()
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .setColor("#22BF41")
  .setDescription(`<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik:\n\`${song.name}\``)

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedBasarisiz, description: `<a:yanlis:734892943332212764>  | Şu anda oynatılan bir müziği görebilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedBasarisiz, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})


    message.channel.send(embeeddd)

};

module.exports.config = {
    name: "çalan",
    aliases: [],
    permlevel: 0
};
