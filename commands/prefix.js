const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Prefix(Ön Ek)'i değiştirebilmek için `Sunucuyu Yönet` yetkisine sahip olmanız gerekmektedir!").then(msg => msg.delete(3000));
	if (!args[0]) var embed2 = new Discord.MessageEmbed()
.setFooter("Harmony © 2020, Tüm Hakları Saklıdır.")
.setColor("RED")
.setAuthor(`Hata!`,"https://cdn.discordapp.com/emojis/671444290102362141.gif?v=1")
.setDescription(`Örnek Kullanım: \`\`!prefix [Özel Ön Ek]\`\``);
return message.channel.send(embed2);
	let prefixes = JSON.parse(fs.readFileSync("../prefixes.json", "utf8"));

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
	aliases: ["önek", "prefixayarla", "önekayarla", "önek-ayarla", "ön-ekayarla","ön-ek-ayarla", "prefix-ayarla"]
}
