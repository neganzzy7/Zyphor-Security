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

    console.log("⚠️ Agora limpando guilds...");

    // pega guilds automaticamente via API do Discord
    const guilds = await rest.get(
      Routes.userGuilds()
    );

    for (const guild of guilds) {
      try {
        console.log(`🧹 Limpando guild: ${guild.id}`);

        await rest.put(
          Routes.applicationGuildCommands(CLIENT_ID, guild.id),
          { body: [] }
        );
      } catch (e) {
        console.log(`❌ Falhou guild ${guild.id}`);
      }
    }

    console.log("🎉 LIMPEZA COMPLETA FINALIZADA!");
  } catch (err) {
    console.error(err);
  }
})();
