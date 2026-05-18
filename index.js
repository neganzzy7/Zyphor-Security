const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

// carregar comandos
const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// interaction handler
client.on("interactionCreate", async (interaction) => {

  // slash commands
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content: "Erro ao executar comando",
        ephemeral: true,
      });
    }
  }

  // BOTÕES DO SETUP
  if (interaction.isButton()) {

    if (interaction.customId === "anti_link") {
      return interaction.reply({
        content: "🔗 Anti-Link alternado",
        ephemeral: true,
      });
    }

    if (interaction.customId === "anti_raid") {
      return interaction.reply({
        content: "⚔️ Anti-Raid alternado",
        ephemeral: true,
      });
    }

    if (interaction.customId === "lockdown") {
      return interaction.reply({
        content: "🔒 Lockdown ativado",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.TOKEN);
