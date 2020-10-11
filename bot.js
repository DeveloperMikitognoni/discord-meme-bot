const Discord = require('discord.js');

var client = new Discord.Client();

const token = process.env.BOT_TOKEN;
const imghost = process.env.IMG_HOST;
const imgnum = process.env.IMG_NUM;
const prefix = process.env.PREFIX;

client.on("ready", () => {
    console.log("ready!");

    client.user.setActivity(prefix + "meme for fun");
});

client.on("message", (message) => {

    if (message.content.startsWith(prefix + "help")) {
        message.channel.send("Hi " + message.author.username);
        message.channel.send("Write " + prefix + "meme to recive a wonderful meme");
    }

    if (message.content.startsWith(prefix + "meme")) {

        var num = Math.floor(Math.random() * imgnum) + 1;

        message.channel.send({ files: [imghost + num + ".jpg"] });
    }
});

client.login(token);