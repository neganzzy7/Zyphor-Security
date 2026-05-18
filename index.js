const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, c => {
  console.log(`✅ BOT ONLINE: ${c.user.tag}`);
});

client.login(process.env.TOKEN);
