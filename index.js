const {
 Client,
 GatewayIntentBits,
 Collection,
 Events
} = require("discord.js");

const fs = require("fs");

const client = new Client({
 intents: [
  GatewayIntentBits.Guilds
 ]
});

client.commands = new Collection();

const commandFiles = fs
.readdirSync("./commands")
.filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

 const command =
 require(`./commands/${file}`);

 client.commands.set(
  command.data.name,
  command
 );

}

client.once(Events.ClientReady, readyClient => {

 console.log(
  `✅ ${readyClient.user.tag} online`
 );

});

client.on(
 Events.InteractionCreate,
 async interaction => {

 if (!interaction.isChatInputCommand())
 return;

 const command =
 interaction.client.commands.get(
  interaction.commandName
 );

 if (!command) {

  console.error(
   "Comando não encontrado."
  );

  return;

 }

 try {

  await command.execute(
   interaction
  );

 } catch (error) {

  console.error(error);

  if (interaction.replied ||
      interaction.deferred) {

   await interaction.followUp({
    content:
    "❌ Erro ao executar comando.",
    ephemeral: true
   });

  } else {

   await interaction.reply({
    content:
    "❌ Erro ao executar comando.",
    ephemeral: true
   });

  }

 }

});

client.login(process.env.TOKEN);
