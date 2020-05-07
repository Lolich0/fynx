const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

  
    message.channel.send({embed: {color: embedSuccess, title: `Help Commands` ,description: `${}:\n` }})


};

module.exports.config = {
    name: "help",
    aliases: ["commands"]
};
