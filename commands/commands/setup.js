const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Configura o servidor"),

  async execute(interaction) {
    try {
      await interaction.reply({
        content: "✅ Setup funcionando!",
        ephemeral: true
      });
    } catch (err) {
      console.error(err);
    }
  },
};
