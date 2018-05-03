
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require('discord.js');

let cooldown = new Set();
let cdseconds = 120;

const bot = new Discord.Client({
    disableEveryone: true
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} saklanmak icin hazir !`);
    bot.user.setActivity("Sığınağın tozunu alıyor")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `Test`){
        let botembed = new Discord.RichEmbed()
            .setDescription("**Bot bilgisi**")
            .setColor("#2d845b")
            .addField(bot.user.username, "Sığınağa yürüme uzaklığı (Ping):  " + "***" + bot.ping + "ms" + "***")
            .setThumbnail(bot.user.displayAvatarURL)
            return message.channel.send(botembed);
    }
});


bot.login(tokenfile.token);