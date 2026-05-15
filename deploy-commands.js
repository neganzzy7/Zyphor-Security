const { REST, Routes } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Limpando comandos antigos...");

    await rest.put(
      Routes.applicationCommands("SEU_CLIENT_ID"),
      { body: [] }
    );

    console.log("Comandos apagados com sucesso!");
  } catch (error) {
    console.error(error);
  }
})();
