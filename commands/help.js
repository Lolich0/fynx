const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

  
    message.channel.send({embed: {color: embedSuccess, title: `Music Commands` ,
                                  description: `\n\n**\`1play [URL/song Title]\`** - Plays The First Song From Youtube\n\n \`1skip\` - skips the currents song \n\n ` }})


};

module.exports.config = {
    name: "help",
    aliases: ["commands"]
};
