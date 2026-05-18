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
      .setTitle("⚙️ Setup do Servidor")
      .setDescription("Ative ou desative sistemas abaixo:")
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
        .setCustomId("lockdown")
        .setLabel("Lockdown")
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row],
    });
  },
};
