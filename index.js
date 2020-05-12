const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
require("./gw.js")
const settings = require("./config/bot.json"); // The bot connects using the configuration file

const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)

const player = new Player(client, settings.youtube_api); // To easily access the player

client.player = player;

client.on("ready", () => {
  console.log("The bot is ready !"); // If the bot is ready it sends a message in the console
  client.user.setActivity(`!help`, { type: "LISTENING" });
});

const https = require("https");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`https://ultra-bot-.glitch.me/`);
}, 280000);

client.login(process.env.TOKEN);
client.on("message", async message => {
  const prefix = settings.prefix;

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0].toLowerCase();
  const args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  const commandfile =
    client.commands.get(cmd.slice(prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  const jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) {
    return console.log("Couldn't find any commands!");
  }

  jsfiles.forEach(file => {
    console.log(`Loading command ${file}`);

    const command = require(`./commands/${file}`);

    client.commands.set(command.config.name, command);
    command.config.aliases.forEach(alias => {
      client.aliases.set(alias, command.config.name);
    });
  });
});



const prefix = "!";
client.on("message", msg => {
  let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
  if (msg.author.bot || msg.channel.type === "dm") return undefined;
  let args = msg.content.split(" ");
  if (args[0].toLowerCase() == `${prefix}server`) {
    let server = new Discord.MessageEmbed()
      .setColor("#0bbafe")
      .setTitle(`Guild Name : \`${msg.guild.name}\``, true)
      .addField("Guild ID", `\`${msg.guild.id}\``, true)
      .addField("Owner", `${msg.guild.owner}`, true) // ok try it noob
      .addField("Region", `\`${msg.guild.region}\``, true)
      .addField("AFK channel",`\`${msg.guild.afkChannel || "Not Found"}\``, true)
      .addField("Created at",`\`${moment(msg.guild.createdAt).format("D/MM/YYYY h:mm")}\``, true) //hey i think ,true looks better
      .addField("Verification level", `\`\`${msg.guild.verificationLevel}\`\``,  true)
      .addField("Guild Channels", `\`${msg.guild.channels.cache.size}\``, true) //dont add here
      .addField("Guild Roles", `\`${msg.guild.roles.cache.size}\``)
      .setThumbnail(msg.guild.iconURL)
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();

    msg.channel.send(server);
  }
});



client.on('message', msg => {
if(msg.content.startsWith("!bot"))  {
   let uptime = client.uptime;
      let days = Math.round(uptime * 1.1574E-8);
      let hours = Math.round(uptime * 2.7778E-7);
      let minutes = Math.round(uptime * 1.6667E-5);
      let bot = new Discord.MessageEmbed()
      .setColor("#0bbafe")
      .setThumbnail('https://images-ext-1.discordapp.net/external/la19W6I3qhW1rS-mTyMo1AT5dygAHgA5Gf-gMfrcpV4/https/cdn.discordapp.com/avatars/709293738094100571/a1f10dc96ad0a02e0b662153a5fec5c2.png')
      .setTitle(`Support server: \`\`soon\`\``, true)
      .addField("Uptime", `\`${days} days, ${hours} hrs, ${minutes} min\``, true)
      .addField("Created at",`\`${moment(client.user.createdAt).format("D/MM/YYYY h:mm")}\``, true)
      .addField("Developers", '`! HΣXXX✨#0005` `Real#0005` `! DarkBoy🍭#6666`') 
      .setFooter(client.user.username, msg.author.avatarURL)
      .setTimestamp(); // LOOK AT IT
  msg.channel.send(bot) //ok cya ima go better
}})



  function sendbotstatus() {
      let uptime = client.uptime;
      let days = Math.round(uptime * 1.1574E-8);
      let hours = Math.round(uptime * 2.7778E-7);
      let minutes = Math.round(uptime * 1.6667E-5);
      let bot = new Discord.MessageEmbed()
      .setColor("#0bbafe")
      .setTitle(`Support server: \`\`soon\`\``, true)
      .addField("Uptime", `\`${days} days, ${hours} hrs, ${minutes} min\``, true)
      .addField("Created at",`\`${moment(client.user.createdAt).format("D/MM/YYYY h:mm")}\``, true)
      .addField("Developers", '`! HΣXXX✨#0005 Real#0005 \n! DarkBoy🍭#6666`', true) 
      .addField("Guilds", `\`${client.guilds.cache.size - 100}\``)
      .addField("Prefix", "`!`", true)//edit it idk
      .setThumbnail("https://cdn.discordapp.com/avatars/709293738094100571/a1f10dc96ad0a02e0b662153a5fec5c2.png")
      .setFooter(client.user.username, "https://cdn.discordapp.com/avatars/709293738094100571/a1f10dc96ad0a02e0b662153a5fec5c2.png")
      .setTimestamp();
  client.channels.cache.get("709387695419424851").send(bot)
}

setInterval(sendbotstatus, 7200000);


client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'purge')) {
    if(!message.channel.guild) return message.reply('this command for servers only,');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have **MANAGE_MESSAGES** permissions!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('I dont have \`\`MANAGE_MESSAGES\`\` permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**Purging must be less than 100.**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.messages.fetch({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`Deleted messages: ${args}`).then(messages => setTimeout(messages.delete(),5000));
  }
  });
//`**\`purge\`** - Deletes chosen amount of messages**\`bot\`** - Shows Developers + Bot Info\n**\`play [URL/song Title]\`** - Plays The First Song From Youtube\n \`skip\` - skips the currents song\n **\`stop\`** - Stops the music and leave the voice channel.\n **\`queue\` - ** Shows the music queue.\n **\`np\` - ** Shows what is playing now.\n **\`pause\` - ** Stops the song for short time.\n **\`repeat\`** - Repeats the song that is playing now.\n **\`resume\`** - Continue playing from when songs got paused.\n **\`cq\`** - Clears all the queue.\n **\`volume\`** - Changes the volume of the songs.\n **\`shuffle\`** - Plays a song from queue randomly.\n **\`server\`** - Shows all server info`, footer:`Requested by ${message.author.tag}`
client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'help')) {
let embed = new Discord.MessageEmbed()
.setDescription(`**\`purge\`** - Deletes chosen amount of messages\n**\`bot\`** - Shows developers + bot info\n**\`play [URL/song Title]\`** - Plays the first song from Youtube\n \`skip\` - Skips the currents song\n **\`stop\`** - Stops the music and leave the voice channel.\n **\`queue\` - ** Shows the music queue.\n **\`np\` - ** Shows what is playing now.\n **\`pause\` - ** Stops the song for short time.\n **\`repeat\`** - Repeats the song that is playing now.\n **\`resume\`** - Continue playing from when songs got paused.\n **\`cq\`** - Clears all the queue.\n **\`volume\`** - Changes the volume of the songs.\n **\`shuffle\`** - Plays a song from queue randomly.\n **\`server\`** - Shows all server info`)
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp(); 
message.channel.send(embed)
 }
  });


client.on('message', message => {
    if (message.content === ('!bot')) {
        let bot = new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor("#36393e")
            .addField('Bot Ping' , `\`${Date.now() - message.createdTimestamp}\`` + ' ms', true)
            .addField('Servers', `\`${client.guilds.size}\``, true)
            .addField('Channels' ,`\`${client.channels.size}\`` , true)
            .addField('Users' ,`\`${client.users.size}\`` , true)
            .addField('Bot Name' , `\`${client.user.tag}\`` , true)
            .addField('Bot Owner' , '`! HΣXXX✨#0005` `Real#0005` \n`! DarkBoy🍭#6666`' , true) 
            .setFooter(message.author.username, message.author.avatarURL)
            message.channel.send(bot)
}
});

client.on("message", message => {
  const one = new Discord.MessageEmbed();
  one.setTitle("Missing permissions!")
  one.setDescription(message.author + ", You don't have permissions to use this command!")
  const two = new Discord.MessageEmbed();
  two.setTitle("Missing permissions!")
  two.setDescription(message.author + ", You don't have permissions to use this command!")
  const three = new Discord.MessageEmbed();
  const four = new Discord.MessageEmbed();

  if (message.content.toLowerCase() === "!lock") {
    if (!message.channel.type == "dm") return;

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(one);
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**:white_check_mark: Channel has been locked.**");
      });
  }
  if (message.content.toLowerCase() === "!unlock") {
    if (!message.channel.type == "dm") return;

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(one);
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**:white_check_mark: Channel has been Opened.**");
      });
  }
});
