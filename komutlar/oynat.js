const embedRenk = "#36393e";
const embedBasarili = "#22BF41";
const embedBasarisiz = "#f30707";

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedBasarisiz, description: `<a:yanlis:734892943332212764>  | Müzik oynatabilmek için bir ses kanalında olmanız gerekmektedir!` }})
    if (!args[0]) return message.channel.send({embed: {color: embedBasarisiz, description: `<a:yanlis:734892943332212764>  | Müzik oynatabilmek için aranacak kelime veyahut kelimeler giriniz!` }})
  
    const aSongIsAlreadyPlaying = client.player.isPlaying(message.guild.id);

    if(aSongIsAlreadyPlaying){
        const song = await client.player.addToQueue(message.guild.id, args.join(" "));
        message.channel.send({embed: {color: embedBasarili, description: `<a:tik:734892939737694239>  | \`${song.name}\` adlı müzik kuyruğa eklendi!` }})
    } else {
        const song = await client.player.play(message.member.voice.channel, args.join(" "));
        message.channel.send({embed: {color: embedBasarili, description: `<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik:\n\`${song.name}\`` }})

    song.queue.on('end', () => {
    message.channel.send({embed: {color: embedBasarisiz, description: `<a:tik:734892939737694239>  | Kuyruktaki tüm müzikler oynatıldı. Fynx Music ses kanalından ayrılıyor!` }})
    })
    }    
};

  
module.exports.config = {
    name: "oynat",
    aliases: ["çal"],
};