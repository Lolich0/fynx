const Discord = require ('discord.js');
const db = require ('quick.db')

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
 .setColor("BLUE")
    .setAuthor(`Harmony Bot Linkler`, client.user.avatarURL())
 .setDescription('<:site:735595781226102795>  | [Harmony Bot İnternet Sayfası](https://harmonybot.tk/)\n\n<:bot:734888733853089903>  | [Harmony Bot`u Sunucunuza Ekleyin!](https://discordapp.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/703582257570644029/734646429833756732/HarmonyMusic.png')
    message.channel.send(embed)
   
 };
 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"],
 };
