const embedRenk = "#36393e";
const embedBasarili = "#22BF41";
const embedBasarisiz = "#f30707";
const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const Sarki = await client.player.nowPlaying(message.guild.id);
  
  const calan = new Discord.MessageEmbed()
  .setImage(`https://i.ytimg.com/vi/${Sarki.id}/default.jpg?width=1920&height=1080`)
  .setColor("#22BF41")
  .setDescription(`<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik:\n\`${Sarki.name}\``)

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedBasarisiz, description: `<a:yanlis:734892943332212764>  | Şu anda oynatılan bir müziği görebilmek için bir ses kanalında olmanız gerekmektedir!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: embedBasarisiz, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})


    message.channel.send(calan)

};

module.exports.config = {
    name: "çalan",
    aliases: [],
    permlevel: 0
};
