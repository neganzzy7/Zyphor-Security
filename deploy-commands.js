const { REST, Routes } = require("discord.js");
const fs = require("fs");

console.log("INICIANDO DEPLOY...");

const commands = [];

try {
  const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
  }

  console.log("COMANDOS ENCONTRADOS:", commands.length);

} catch (err) {
  console.log("ERRO LENDO PASTA commands:", err);
}

const token = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;

if (!token || !clientId) {
  console.log("❌ TOKEN OU CLIENT_ID FALTANDO");
  process.exit(1);
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("REGISTRANDO...");

    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    );

    console.log("✅ COMANDOS REGISTRADOS");
  } catch (err) {
    console.log("❌ ERRO AO REGISTRAR:", err);
  }
})();
