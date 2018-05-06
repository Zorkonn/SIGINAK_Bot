const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");

const bot = new Discord.Client({
    disableEveryone: true
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} saklanmak icin hazir !`);
    bot.user.setActivity("Sığınağın tozunu alıyor");
});



bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    /* CatchWords */

    var authortag = " " + "<@!" + message.author.displayAvatarURL + ">";
    const catchwordsArray = require("./catchwords.json");
    var randomcatchword_entrance = catchwordsArray.entrance[Math.floor(Math.random() * catchwordsArray.entrance.length)];
    var randomcatchword_cooldown = catchwordsArray.cooldown[Math.floor(Math.random() * catchwordsArray.cooldown.length)];
    var randomcatchword_roomerror = catchwordsArray.roomerror[Math.floor(Math.random() * catchwordsArray.roomerror.length)];



    /* &info */
    if (cmd === `${prefix}info`) {
        let botembed = new Discord.RichEmbed()
            .setDescription("**Bot bilgisi**")
            .setColor("#2d845b")
            .addField(bot.user.username, "Sığınağa yürüme uzaklığı (Ping):  " + "***" + bot.ping + "ms" + "***")
            .setThumbnail(bot.user.displayAvatarURL)
        return message.channel.send(botembed);
    }



    /* &Sığınak */
    if (cmd === `${prefix}sığınak`) {

        message.delete(0);
        message.channel.send(randomcatchword_entrance);





        var beforechannel = message.member.voiceChannelID;
        let voicechannel = message.member.voiceChannel;

        if (voicechannel === undefined) {
            return message.channel.send(randomcatchword_roomerror);
            return;
        };
        voicechannel.members.forEach(async (member) => {
            await member.setVoiceChannel('441653677153976340');
            console.log(`Moved ${member.displayName}`);
            setTimeout(() => {
                member.setVoiceChannel(beforechannel);
            }, 5000);
        });

        console.log("Sığınaklara koşuldu !");
    };

});


bot.login(tokenfile.token);