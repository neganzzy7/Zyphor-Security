const { Client, GatewayIntentBits, Collection, Events } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

// carrega comandos com segurança
let commandFiles = [];

try {
  commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));
} catch (err) {
  console.log("⚠️ Pasta commands não encontrada");
}

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, c => {
  console.log(`✅ Bot online: ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);

    if (!interaction.replied) {
      await interaction.reply({
        content: "❌ Erro ao executar comando",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.TOKEN);
