const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express")
const app = express();
const moment = require("moment")

const settings = require ("./config/bot.json") // The bot connects using the configuration file

const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)

const player = new Player(client, settings.youtube_api); // To easily access the player

client.player = player;

client.on("ready", () => {

    console.log("The bot is ready !"); // If the bot is ready it sends a message in the console
client.user.setActivity(`Ultra Bot`, {type: 'LISTENING'})
});

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`https://ultra-bot-.glitch.me/`);
}, 280000);


client.login(settings.token_bot); 
client.on('message', async (message) => {

    const prefix = settings.prefix;
        
    const messageArray = message.content.split(" ");
    const cmd = messageArray[0].toLowerCase();
    const args = messageArray.slice(1);
      
    if(!message.content.startsWith(prefix)) return;
    const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)
        
});
 
client.commands = new Discord.Collection();
client.aliases =  new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    
    const jsfiles = files.filter(f => f.split(".").pop() === "js") 

    if(jsfiles.length <= 0) {
        return console.log("Couldn't find any commands!");
    }

    jsfiles.forEach((file) => {
        
        console.log(`Loading command ${file}`);

        const command = require(`./commands/${file}`);

        client.commands.set(command.config.name, command);  
        command.config.aliases.forEach(alias => {
            client.aliases.set(alias, command.config.name);
        });

    });

});





const prefix = "!"
client.on("message", msg => {
let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
if(msg.author.bot || msg.channel.type === "dm") return undefined;
let args = msg.content.split(' ');
if(args[0].toLowerCase() == `${prefix}server`) {
let server = new Discord.MessageEmbed()
.setColor("#0bbafe")
.setTitle(`Guild Name : \`${msg.guild.name}\``)
.addField("Guild ID",`\`${msg.guild.id}\`` ,true)
.addField("Owner",`${msg.guild.owner}` ,true)
.addField("Region",`\`${msg.guild.region}\`` ,true)
.addField("AFK channel",`\`${msg.guild.afkChannel || 'Not Found'}\`` ,true)
.addField("Created at",`${moment(msg.guild.createdAt).format("D/MM/YYYY h:mm")}` ,true) //why is this command fucked lmfao
.addField("Verification level",`\`${msg.guild.verificationLevel}\` | \`${verifyL[msg.guild.verificationLevel]}\`` ,true)
.addField("Guild Channels",`**\`\`${msg.guild.channels.size}\`\`**`, true)//STOP
.addField("Guild Roles",`\`\`${msg.guild.roles.size}\`\``,true)
.setThumbnail(msg.guild.iconURL)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
msg.channel.send(server)
 
};
})