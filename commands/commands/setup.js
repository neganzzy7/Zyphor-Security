const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Configuração do servidor"),

  async execute(interaction) {
    await interaction.reply("✅ Setup funcionando!");
  },
};
