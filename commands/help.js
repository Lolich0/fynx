const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message, args) => {
 


    message.channel.send({embed: {color: embedSuccess,description: ` \`.play\` \`[.p]\` → بۆ لێدانی گۆرانی
**\`.skip\` \`[.s]\`**→ بۆ لادانی گۆرانی
**\`.stop\`** → بۆ راوەستاندنی بۆت
**\`.resume\`** → بۆ لێدانەوەی گۆرانی
**\`.queue\`** → بۆ سەیرکردنی سڕەی گۆرانیەکان
**\`.now-playing\` \`[.np]\`** →چ گۆرانیەک ئێستا لیدراوە
\`.\` ` }}) 



};

module.exports.config = {
    name: "help",
    aliases: ["hemn"]
};
