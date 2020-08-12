const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
"**Fynx Music kullanıcıları bilginize;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce Fynx Music'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n<a:coder:734885134800519288>  Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n<:developer:734885133684965428>  Eksiklerimiz veya hatalarımızı `+tavsiye` komutu ile bizimle paylaşabilirsiniz.",
"**Fynx Music kullanıcılarının gizliliği;**\n\n<:guvenlik:735597569597767840>  Biz Fynx Music geliştiricileri olarak sizin gizliliğinizi önemsiyor ve saygı duyuyoruz. Bu sebepten ötürü internet sayfamızda **Gizlilik** adlı bir konu açtık.\n\n**`Detaylı Bilgi:`**\n<a:secenek:733987076718198864> Sitemiz Çok Yakinda",          
'**Fynx Music kullanıcı komutları**\n\n**`+yardım`**\n<a:secenek:733987076718198864>  Bütün komutları ve açıklamaları gösterir. \n\n **`+oynat <Şarkı İsmi>`**\n<a:secenek:733987076718198864>  Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n **`+durdur`**\n<a:secenek:733987076718198864>  Fynx Music müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n  **`+atla`**\n<a:secenek:733987076718198864>  Oynatılan olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n **`+duraklat`**\n<a:secenek:733987076718198864>  Oynatılan olan müziği duraklatır. \n\n **`+devam`**\n<a:secenek:733987076718198864>  Duraklatılan müziği devam ettirir.',
'**Fynx Music kullanıcı komutları**\n\n**`+karıştır`**\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri karıştırır. \n\n **`+döngü`**\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n **`+çalan`**\n<a:secenek:733987076718198864>  Oynatılan olan müziği gösterir.\n\n  **`+kuyruk`**\n<a:secenek:733987076718198864>  Müzik kuyruğunu gösterir. \n\n **`+kuyruğu-temizle`**\n<a:secenek:733987076718198864>  Müzik kuyruğunu temizler.\n\n **`+ses <1/100>`**\n<a:secenek:733987076718198864>  Oynatılan müziğin ses seviyesini ayarlar.',
'**Fynx Music Linkler**\n\n**• [FYNX](https://discord.gg/asCQAEA)**\n\n**• [FynxCode](https://discord.gg/fynxcode)**\n\n**• [FynxStore](https://discord.gg/pc74FNX)**\n\n**• [Yapımcı İnstagram Hesabı](https://instagram.com/m_arda_dusova)**'
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
.setAuthor(`Fynx Music Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'yardım',
aliases: ["help", "y", "h"]
};
 
