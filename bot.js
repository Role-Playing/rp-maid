const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.NTI0NzgxOTM5Mjc0Njc4MzAy.DvtxWA.FY2C38bXNJsVUfcngLSK3H_cMP8);
