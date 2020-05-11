# Music-bot
A complete code to download for a music bot. Using a module (discord-player) 🎧

Looking for a code for a music bot ? This fully open source code is made for your !
Warning, this code uses the v12 of the Discord.js module. Previous versions such as (11.5.1, 11.5.0 or other) will not be supported.

Well, let's start by downloading the code.
Go to the folder `config` then the file `config.json`.
For the bot to be able to start, please complete the file with your credentials as follows :

```js
{
    "prefix": "PREFIX BOT",
    
    "token_bot": "TOKEN BOT",
    "youtube_api": "TOKEN YOUTUBE API"
}
```

Reminder :

- `prefix`, the prefix that will be set to use the bot.
- `token_bot`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `youtube_api`, your youtube token available on the [Google console](https://console.developers.google.com). 

To customize the emojis go to the file `emojis.json`.
Emojis are already defined by default but you can modify them if you wish.

```js
{
    "music": ":musical_note:",
    "queue": ":bar_chart:",
    "error": ":tools:",
    "success": ":white_check_mark:"
}
```


