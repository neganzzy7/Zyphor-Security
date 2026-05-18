console.log("INICIANDO");

const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Ping do bot"
  },
  {
    name: "setup",
    description: "Setup do servidor"
  }
];

const rest = new REST({ version: "10" })
.setToken(process.env.TOKEN);

(async () => {

  try {

    console.log("REGISTRANDO");

    await rest.put(
      Routes.applicationCommands(
        process.env.CLIENT_ID
      ),
      { body: commands }
    );

    console.log("✅ COMANDOS REGISTRADOS");

  } catch (error) {

    console.error(error);

  }

})();
