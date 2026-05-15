const { REST, Routes } = require("discord.js");

const TOKEN = process.env.TOKEN;
const CLIENT_ID = "1501444873998303344";

// Coloca aqui os IDs dos servidores onde seu bot está (se tiver guild commands)
const GUILD_IDS = [
  // "123456789012345678",
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("🧹 Limpando comandos globais...");

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: [] }
    );

    console.log("✅ Comandos globais apagados!");

    for (const guildId of GUILD_IDS) {
      console.log(`🧹 Limpando comandos do servidor: ${guildId}`);

      await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, guildId),
        { body: [] }
      );

      console.log(`✅ Servidor ${guildId} limpo!`);
    }

    console.log("🎉 LIMPEZA COMPLETA FINALIZADA!");
  } catch (err) {
    console.error("❌ Erro ao limpar comandos:", err);
  }
})();
