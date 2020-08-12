const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Müzik oynatabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if (!args[0]) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Müzik oynatabilmek için aranacak kelime veyahut kelimeler giriniz!` }})  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik kuyruğa eklendi!` }})
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
 message.channel.send({embed: {color: FynxDogru, description: `<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik:\n\`${sarki.name}\`` }})
sarki.queue.on('end', () => {
message.channel.send({embed: {color: FynxHata, description: `<a:tik:734892939737694239>  | Kuyruktaki tüm müzikler oynatıldı. Fynx Music ses kanalından ayrılıyor!` }})
    })
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal"]
};