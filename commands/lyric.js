
//////komutlar/lyrics.js///////

const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  const kufurr = new Discord.MessageEmbed()
.setColor(0x36393E)
.setAuthor("Harmony Music")
.setDescription(`Lyrics bulabilmek için lütfen Türkçe harf kullanmayınız.`);
  
  const kufur = ["ş","ç","ö","ü","ğ","ı","Ş","Ç","Ö","Ü","Ğ","İ"]
  if (kufur.some(word => message.content.includes(word))) return message.channel.send(kufurr)   
  
    args.song = args.join(' ');

const lyric = require('../ek/lyrics')
  
  let yanıt = await lyric(`/song/${args.song}`);

  if (yanıt.error) {
    const embed = new Discord.MessageEmbed()
    .setColor(0x36393E)
    .setTitle('Bulunamadı.')
    .setDescription(`**${args.song}** adında lyrics bulunamadı. Doğru şarkıyı aradığına eminsen arama terimine şarkı sahibini ekleyip ve yeniden deneyiniz.`)
    return await message.channel.send(embed);
  }
const bmended = new Discord.MessageEmbed()
.setColor(0x36393E)
.setAuthor(yanıt.artist.name, yanıt.artist.image)
.setTitle(yanıt.name)
.setDescription(yanıt.lyrics.length > 2048
               ? `${yanıt.lyrics.substring(0,2045)}...`
               : yanıt.lyrics)
.setThumbnail(yanıt.image)
  await message.channel.send(bmended);
};

exports.config = {
  name: 'lyrics',
  aliases: []
};



