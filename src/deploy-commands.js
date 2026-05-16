console.log("TESTE");
const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "ping",
    description: "Responde pong"
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("🔄 Registrando comandos...");

    await rest.put(
      Routes.applicationCommands("1501444873998303344"),
      { body: commands }
    );

    console.log("✅ Comandos registrados.");
  } catch (error) {
    console.error(error);
  }
})();
node src/deploy-commands.js
