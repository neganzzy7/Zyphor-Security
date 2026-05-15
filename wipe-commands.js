const { REST, Routes } = require("discord.js");

const TOKEN = process.env.TOKEN;
const CLIENT_ID = "1501444873998303344";

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("🧹 Limpando comandos globais...");

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: [] }
    );

    console.log("✅ Globais limpos!");

    console.log("⚠️ Limpando comandos de servidores conhecidos...");

    // Se não souber os IDs, esse método não pega todos automaticamente
    // então você PRECISA apagar manualmente os principais servidores

    const GUILD_IDS = [
      // coloque aqui os servidores onde testou o bot
    ];

    for (const id of GUILD_IDS) {
      console.log(`🧹 Limpando guild ${id}`);

      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, id),
        { body: [] }
      );
    }

    console.log("🎉 LIMPEZA FINALIZADA!");
  } catch (err) {
    console.error(err);
  }
})();
