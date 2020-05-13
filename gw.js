const Discord = require("discord.js"),
client = new Discord.Client(),
settings = {
    prefix: "!" //hey real write the commands in help command
};
// Requires Manager from discord-giveaways
const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 4000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});


client.giveawaysManager = manager;

//Start giveaway\\
client.on("message", (message) => {
    const ms = require("ms"); 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "start"){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
    let time = args[0];
                      let winners = args[1];
                      let prize = args.slice(2).join(" ")
                      if (!time || !winners || !prize) return message.reply(`
:boom:Please include a length of time, and optionally a number of winners and a prize!
Example usage: \`\`!start 30m 5 Awesome T-Shirt\`\``)
                      if (isNaN(winners)) return message.reply(`Winner must be a number!`)
                      if (!time) return message.reply(`Incorrect time! example for time: 1d`)

client.giveawaysManager.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnerCount: parseInt(args[1]),
        hostedBy: message.author ,
    messages: {
        giveaway: "🎉🎉**GIVEAWAY** 🎉🎉",
        giveawayEnded: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**!",
        inviteToParticipate: "React with 🎉 to enter!",
        winMessage: `Congratulations, {winners}! You won **{prize}**! ${message.url}`,
        embedFooter: "Giveaways",
        noWinner: "Could not determine a winner!",
        hostedBy: "Hosted by: {user}",
        winners: "Winner/s",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days",
            pluralS: true
         }
    }
});
    }
});


//Reroll giveaway\\
client.on("message", (message) => {
    const ms = require("ms"); 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "reroll"){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        let messageID = args[0];
      if(!messageID) messageID = "**None**";
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
});


//End giveaway\\
client.on("message", (message) => {
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.startsWith("!end")){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        let messageID = args[0];
      client.giveawaysManager.edit(messageID, {
      setEndTimestamp: Date.now()+1
        }).catch((err) => {
          if(!messageID) messageID = "**None**";
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
      message.channel.send("Successfully ended!")
    }
});