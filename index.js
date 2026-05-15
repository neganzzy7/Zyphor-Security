const {
 Client,
 GatewayIntentBits
} = require("discord.js");

const client = new Client({
 intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
 ]
});

client.once("ready", () => {

 console.log("Zyphor online");

});

client.on("messageCreate", async msg => {

 if(msg.content === "!ping") {

  msg.reply("pong");

 }

});

client.login(process.env.TOKEN);
