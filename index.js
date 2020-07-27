const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const settings = require("./config/bot.json"); // The bot connects using the configuration file
const { Player } = require("discord-player"); // Create a new Player (Youtube API key is your Youtube Data v3 key)
const db = require('quick.db');



const player = new Player(client, settings.youtube_api); // To easily access the player

client.player = player;
const generator = require('generate-password'); 

client.on("ready", () => {
  setInterval(() => {
  console.log(`Harmony | ` + client.guilds.cache.size + ` Sunucu | ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`);
  client.user.setActivity(`Harmony | ` + client.guilds.cache.size + ` Sunucu | ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`, { type: 'LISTENING' });
}, 30000);
  console.log("Harmony bot şu anda aktif!");
//client.user.setActivity(`BAKİMDA`)
});

const http = require("http");
 app.get("/", (request, response) => {
  console.log(Date.now() + " BOT Aktif.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://defiant-kind-peach.glitch.me`);
}, 180000);

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
    return console.log("Herhangi bir komut bulunamadı!");
  }

  jsfiles.forEach(file => {
    console.log(`Yüklenen Komut: ${file}`);

    const command = require(`./commands/${file}`);

    client.commands.set(command.config.name, command);
    command.config.aliases.forEach(alias => {
      client.aliases.set(alias, command.config.name);
    });
  });
});


client.on("message", msg => {
var dm = client.channels.cache.get("734753284048289805")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Harmony Direkt Mesajlar`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)
dm.send(botdm)

}
if(msg.channel.bot) return;
});

client.on('voiceStateUpdate', async (___, newState) => {

  if (
    newState.member.user.bot &&
    newState.channelID &&
    newState.member.user.id == client.user.id &&
    !newState.selfDeaf
  ) {
    newState.setSelfDeaf(true);
  }
});
