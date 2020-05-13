const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Sorry you can't do that!").then(msg => msg.delete(3000));
	if (!args[0]) 
var embed = new Discord.RichEmbed()
.setDescription('**Error**\nUsage: !prefix [prefix]')
return message.channel.send(embed);
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
		if (err) console.log(err);
	});
  console.log(args[0])
}

module.exports.config = {
	name: "prefix",
	aliases: ["setprefix"]
}
