const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
const prefix = "1"
const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
    if(message.contact === prefix + "help") {
      let embed = new Discord.RichEmbed()
      .addField("2");
      message.channel.send(embed)
      console.log("Hellow world")
    } 
};

module.exports.config = {
    name: "help",
    aliases: ["help"]
};
