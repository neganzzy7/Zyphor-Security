const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Setup do servidor"),

  async execute(interaction) {
    await interaction.reply("✅ Setup funcionando!");
  },
};
