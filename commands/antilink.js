const { SlashCommandBuilder } = require("discord.js");

let enabled = false;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("antilink")
    .setDescription("Ativar/desativar anti-link"),

  async execute(interaction) {
    enabled = !enabled;

    interaction.reply(
      `🔗 Anti-link está: **${enabled ? "ON" : "OFF"}**`
    );
  }
};
