const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
const Discord = require("discord.js")

module.exports.run = async (client, message) => {
message.channel.send({embed: { description: `**\`bot\`** - Shows Developers + Bot Info\n**\`play [URL/song Title]\`** - Plays The First Song From Youtube\n \`skip\` - skips the currents song\n **\`stop\`** - Stops the music and leave the voice channel.\n **\`queue\` - ** Shows the music queue.\n **\`np\` - ** Shows what is playing now.\n **\`pause\` - ** Stops the song for short time.\n **\`repeat\`** - Repeats the song that is playing now.\n **\`resume\`** - Continue playing from when songs got paused.\n **\`cq\`** - Clears all the queue.\n **\`volume\`** - Changes the volume of the songs.\n **\`shuffle\`** - Plays a song from queue randomly.\n **\`server\`** - Shows all server info`, footer:`Requested by ${message.author.tag}`}})


};

module.exports.config = {
    name: "help",
    aliases: ["commands"]
};
