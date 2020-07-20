const Discord = require('discord.js');
const bot = new Discord.Client()

const alpike = new Discord.ShardingManager('./index.js', {
    totalShards: "auto",
    token: process.env.TOKEN
});

alpike.spawn(); 

alpike.on('launch', shard => {
    console.log(`${shard.id}. Shard açıldı.`);
});

setTimeout(() => {
    alpike.broadcastEval("process.exit()");
}, 21600000);

