const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

  
    message.channel.send({embed: {color: embedSuccess, title: `Music Commands` ,
                                  description: `\n\n**\`1play [URL/song Title]\`** - Plays The First Song From Youtube\n\n \`1skip\` - skips the currents song \n\n **\`1stop\`** Stops the music and leave the voice channel. \n\n **\`1queue\`** Shows the music queue. \n\n **\`1np\`** Shows what is playing now. \n\n **\`1pause\`** Stops the song for short time ` }})


};

module.exports.config = {
    name: "help",
    aliases: ["commands"]
};
