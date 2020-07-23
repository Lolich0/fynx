const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `<a:yanlis:734892943332212764>  | Ses seviyesini ayarlabilmek için bir ses kanalında olmanız gerekmektedir!` }})
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
  let volume = parseInt(args.join(" "));
  if (!volume) return message.channel.send({embed: {color: client.colors.error, description: `<a:yanlis:734892943332212764>  | Ses seviyesini ayarlayabilmek için sadece bir doğal sayı giriniz.` }})
  if (isNaN(args[0])) return message.channel.send({embed: {color: client.colors.error, description: `<a:yanlis:734892943332212764>  | Ses seviyesini ayarlayabilmek için sadece bir doğal sayı giriniz.` }})
  
  client.player.setVolume(message.guild.id, volume);
    
  message.channel.send({embed: {color: client.colors.success, description: `<a:tik:734892939737694239>  | Ses seviyesi, başarılı bir şekilde \`${args.join(" ")}\` olarak ayarlandı! ` }})


}

module.exports.config = {
  name: "set-volume",
  aliases: ['sv']
}