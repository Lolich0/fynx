const utils = require('../global/utils');
const config = require('../config/bot.json');
const { Player } = require("discord-player"); 
const settings = require("../config/bot.json"); // The bot connects using the configuration file

module.exports.run = async (bot, message, args) => {

  const player = new Player(bot, settings.youtube_api); // To easily access the player

bot.player = player;
  
    const queue = bot.player.getQueue(message.guild.id);
    if (!queue) return message.channel.send('⚠ No musics are being played.');
    
    if (!args[0]) return message.channel.send(`🎵 Current Volume: **${queue.volume}/100**`);
    if (isNaN(args[0])) return message.channel.send(`${message.author}, please input a volume between 0 and 100 only!`, `${config.prefix}volume <volume>`);
    if (args[0] < 0 || args[0] > 100) return message.channel.send(`${message.author}, please input a volume between 0 and 100 only!`, `${config.prefix}volume <volume>`);

    queue.setVolume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 Volume has now been set to **${queue.volume}/100**`);
};

module.exports.config = {
    name: 'volume',
    aliases: ['vol']
};