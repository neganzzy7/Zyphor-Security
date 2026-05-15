const { SlashCommandBuilder } = require("discord.js");

let enabled = false;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("antiraid")
    .setDescription("Ativar/desativar anti-raid"),

  async execute(interaction) {
    enabled = !enabled;

    interaction.reply(
      `🛡️ Anti-raid está: **${enabled ? "ON" : "OFF"}**`
    );
  }
};
