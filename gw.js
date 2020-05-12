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
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

client.on("ready", () => {
    console.log(`
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                Loading!...                                   ┃
┃Giveaway Part: Loaded successfully                                            ┃
┃Giveaway Part: Loaded All Commands                                            ┃
┃                                                                              ┃
┃                     Logged in as ${client.user.tag}                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`);
}); 

client.login(process.env.TOKEN);
client.on("message", (message) => {
    const ms = require("ms"); // npm install ms
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "start"){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        // g!start-giveaway 2d 1 Awesome prize!
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
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
            pluralS: true // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
         }
    }
});
    }
});

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
            message.channel.send("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
});
client.on("message", (message) => {
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.startsWith("!end")){
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;
      message.delete();
        let messageID = args[0];
      client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway Ended!");
        }).catch((err) => {
          if(!messageID) messageID = "**None**";
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
});

