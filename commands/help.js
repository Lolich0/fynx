const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`**MUSIC COMMANDS**`)
        .setDescription(`TEST DAKAM`)
    message.channel.send(embed);

};

module.exports.help = {
    name: 'help',
    aliases: []
};