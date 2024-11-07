import { Client, Events, IntentsBitField, Partials } from 'discord.js';
import config from './config.json';

// initialize the client
const client = new Client({
	// With intents you can specify the permissions your bot needs to function
	intents: [IntentsBitField.Flags.GuildMessages],
	// Partials allow you to receive partial data from discord. (e.g. data that was created before the bot was online)
	partials: [Partials.Message],
});

// When the client is initialized, it will emit the ready event
client.once(Events.ClientReady, (client) => {
	// Log the client logged in as the bot's username
	console.log(`Logged in as ${client.user?.tag}`);
});

// Example event listener for when a message is created (When a user sends a message)
client.on(Events.MessageCreate, (message) => {
	console.log(message.author.username, message.cleanContent);
});

// Log in to the bot using the token to the Discord API
client.login(config.BOT_TOKEN).catch((error) => {
	if (error instanceof Error) console.error(`There was an error logging in: ${error.message}`);
});
