
require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "gban",
    description: "Ban global de um usuário"
  },
  {
    name: "gwarn",
    description: "Warn global de um usuário"
  },
  {
    name: "antilink",
    description: "Ativar sistema anti-link"
  },
  {
    name: "antiraid",
    description: "Ativar sistema anti-raid"
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("🚀 Registrando comandos...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("✅ Comandos registrados com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao registrar comandos:", error);
  }
})();
