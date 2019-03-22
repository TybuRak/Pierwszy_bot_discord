"use strict";

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', function () {
    console.log('Ready');
});

client.on(
    "message",

    function (message) {
        console.log(message.content)
    }
);

client.login("NTU4NjE4NDY0MDM0NjE5Mzky.D3ZdgQ.yH2xsH5lYG4_Yi4amQsVTDu3Wqg").catch(console.error);