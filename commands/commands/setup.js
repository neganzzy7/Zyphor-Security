const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Painel de configuração do servidor"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("⚙️ Painel de Setup")
      .setDescription(
        "Use os botões abaixo para ativar/desativar sistemas do servidor."
      )
      .setColor("Blue");

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("anti_link")
        .setLabel("Anti-Link")
        .setStyle(ButtonStyle.Danger),

      new ButtonBuilder()
        .setCustomId("anti_raid")
        .setLabel("Anti-Raid")
        .setStyle(ButtonStyle.Danger),

      new ButtonBuilder()
        .setCustomId("admin_roles")
        .setLabel("Admins")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
