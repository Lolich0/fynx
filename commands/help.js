const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

  
    message.channel.send({embed: {color: embedSuccess, title: `Music Commands` ,
                                  description: `\n\n My Prefix Is: \`1\` \n\n**\`play [URL/song Title]\`** - Plays The First Song From Youtube\n\n \`skip\` - skips the currents song \n\n **\`stop\`** - Stops the music and leave the voice channel. \n\n **\`queue\` - ** Shows the music queue. \n\n **\`np\` - ** Shows what is playing now. \n\n **\`pause\` - ** Stops the song for short time \n\n **\`repeat\`** - Repeats the song that is playing now. \n\n **\`resume\`** - Continue playing from when songs got paused. \n\n **\`cq\`** - Clears all the queue. \n\n **\`volume\`** - Changes the volume of the songs. \n\n **\`shuffle\`** - Plays a song from queue randomly. ` }})


};

module.exports.config = {
    name: "help",
    aliases: ["commands"]
};
