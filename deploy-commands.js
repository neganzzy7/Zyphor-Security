const { REST, Routes } = require("discord.js");
const fs = require("fs");

const commands = [];

const files = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

for (const file of files) {
  const cmd = require(`./commands/${file}`);

  if (!cmd.data) {
    console.log(`IGNORADO: ${file}`);
    continue;
  }

  commands.push(cmd.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log(`Registrando ${commands.length} comandos...`);

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("✔ Comandos registrados!");
  } catch (err) {
    console.error(err);
  }
})();
