const Discord = require('discord.js');

// Create a new client instance
const Client = new Discord.Client();

// register an event listener for the 'ready' event
Client.once('ready', () => {
	console.log('Bot is ready!');
});

// Login to the Discord API
Client.login('YOUR_BOT_TOKEN').catch((error) => {
	console.error('Something went wrong when logging in: ', error);
});
