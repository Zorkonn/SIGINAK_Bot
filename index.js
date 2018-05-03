const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require('discord.js');

const bot = new Discord.Client({
    disableEveryone: true
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} saklanmak icin hazir !`);
    bot.user.setActivity("Sığınağın tozunu alıyor")
});


bot.login(botconfig.token);