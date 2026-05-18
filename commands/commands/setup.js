module.exports = {
  data: {
    name: "setup",
    description: "Setup do servidor",
  },

  async execute(interaction) {
    console.log("SETUP RODOU");
    await interaction.reply("✅ Setup funcionando!");
  },
};
