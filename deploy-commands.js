const { REST, Routes } = require("discord.js");
const fs = require("fs");

const commands = [];

const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  
  // proteção pra evitar quebrar
  if (!command.data) continue;

  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log(`Carregando ${commands.length} comandos...`);

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("✔ Slash commands atualizados!");
  } catch (err) {
    console.error(err);
  }
})();
