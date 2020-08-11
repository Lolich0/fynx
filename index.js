const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const settings = require("./config/bot.json"); 
const { Player } = require("discord-player"); 
const db = require('quick.db');

//-------------Bot Eklenince Mesaj Gönderme Komutu ---------------\\


const emmmmbed = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png`)
.addField(`Fynx Music - Teşekkürler`, `Selamlar, ben Mustafa(Fynx Music Geliştiricisi) öncelikle botumu eklediğiniz ve bana destek olduğunuz için sizlere teşekkürl
erimi sunarım`)
.addField(`Fynx - Prefix(Ön Ek)`, `Fynx Music botun prefixi(ön eki) = \`+\`(ünlem işareti)'dir.`)
.addField(`Fynx Music - Nasıl Kullanılır?`, `Fynx Music botun tüm özelliklerinden yararlanabilmek için sadece \`+yardım\` yazmanız gerekmektedir.`)
.addField(`Fynx Music - Linkler`, `Destek Sunucumuz:\nhttps://discord.gg/fynxcode`)
.setFooter(`Fynx Music`)
.setTimestamp()
.setImage(`https://i.pinimg.com/originals/a7/2e/dd/a72eddb090f20f7f8dd535c8390c2fba.gif`);

client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})

defaultChannel.send(emmmmbed)

});
//----------------------------------------------------------------\\
const player = new Player(client, settings.youtube_api);

client.player = player;

client.on("ready", () => {
client.user.setActivity(`Fynx Music | ` + client.guilds.cache.size + ` Sunucu | ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcı`, { type: 'LISTENING' });
  console.log("Fynx Music bot şu anda aktif!");
});

//-------------7/24 Komutu ---------------\\


const http = require("http");
 app.get("/", (request, response) => {
  console.log("Fynx Music Pinglendi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ProjeAdi.glitch.me/`);
}, 1000 * 60 );
//------------------------------------------\\

client.login(process.env.TOKENS);
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

//-------------Kendini Sağirlaştirma Komutu ---------------\\

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
//---------------------------------------------------------\\