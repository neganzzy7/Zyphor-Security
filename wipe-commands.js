const { REST, Routes } = require("discord.js");

const TOKEN = process.env.TOKEN;
const CLIENT_ID = "1501444873998303344";

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("🧹 Limpando comandos globais...");
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: [] });

    console.log("🧹 Limpando comandos de servidor...");

    // coloque os servidores onde o bot já esteve
    const GUILDS = [
      // IDs aqui se tiver
    ];

    for (const id of GUILDS) {
      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, id),
        { body: [] }
      );
    }

    console.log("✅ Tudo limpo!");
  } catch (e) {
    console.error(e);
  }
})();
