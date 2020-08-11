const Discord = require ('discord.js');
const db = require ('quick.db')

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
 .setColor("BLUE")
    .setAuthor(`Fynx Music Linkler`, client.user.avatarURL())
 .setDescription('<:site:735595781226102795>  | [Fynx Music İnternet Sayfası Yakında](https://google.com/)\n\n<:bot:734888733853089903>  | [Fynx Music`i Sunucunuza Ekleyin!](https://discordapp.com/oauth2/authorize?client_id=522870338867167254&scope=bot&permissions=8)')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
    message.channel.send(embed)
   
 };
 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"],
 };