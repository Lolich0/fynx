const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express")
const app = express()

const settings = require ("./config/bot.json") // The bot connects using the configuration file

const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)

const player = new Player(client, settings.youtube_api); // To easily access the player

client.player = player;

client.on("ready", () => {

    console.log("The bot is ready to play music"); // If the bot is ready it sends a message in the console
client.user.setActivity("ᴰᵉᵛ Ｈ Ｅ Ｍ Ｎ", {type: 'LISTENING'})
});

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`https://rezxmusic.glitch.me/`);
}, 280000);


client.login(settings.token_bot); //The bot connects thanks to the token

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




 //   "token_bot": "Njk1NTkwNTEwNTU4OTY5ODU3.XqfKTQ.g60HXOLnnRKRLpPT2HwpI6FPYT4",



const prefix = '.'
client.on("message", message => {
if (message.content === prefix + ('test')) {
let one = new Discord.RichEmbed()
 .setFooter("Hemn Bot © 2020-2025, Cool Bot ! Since 2020")
 .setImage('https://media.discordapp.net/attachments/706377606659964928/707007568895279104/pngtree-geometric-poster-banner-gradient-purple-geometry-image_12275_3.png')
 .setAuthor(`Hemn System`,"https://media.discordapp.net/attachments/701435523285123103/706260422528860191/cool_logo.png?width=406&height=406")
 .setDescription('<:on2:706979888837558382> `h/help admin` Admin Commands\n<:on2:706979888837558382> `h/help general` General Commands\n<:on2:706979888837558382> `h/help protect` Protect Commands\n<:on2:706979888837558382> `h/help music` Music Commands');
 message.channel.send(one);
}
});