const {
 SlashCommandBuilder,
 PermissionFlagsBits,
 ChannelType,
 EmbedBuilder
} = require("discord.js");

module.exports = {

 data:
 new SlashCommandBuilder()

 .setName("setup")

 .setDescription(
  "Configura o Zyphor Security"
 )

 .setDefaultMemberPermissions(
  PermissionFlagsBits.Administrator
 ),

 async execute(interaction) {

  const guild =
  interaction.guild;

  // canais

  const logs =
  await guild.channels.create({

   name: "zyphor-logs",

   type:
   ChannelType.GuildText

  });

  const alertas =
  await guild.channels.create({

   name: "zyphor-alertas",

   type:
   ChannelType.GuildText

  });

  const monitoramento =
  await guild.channels.create({

   name:
   "zyphor-monitoramento",

   type:
   ChannelType.GuildText

  });

  // embed

  const embed =
  new EmbedBuilder()

  .setTitle(
   "🛡️ Zyphor Security"
  )

  .setDescription(
   "Servidor configurado com sucesso!"
  )

  .addFields(

   {
    name: "📁 Logs",
    value: `${logs}`,
    inline: true
   },

   {
    name: "🚨 Alertas",
    value: `${alertas}`,
    inline: true
   },

   {
    name: "👁️ Monitoramento",
    value:
    `${monitoramento}`,
    inline: true
   }

  )

  .setFooter({

   text:
   "Zyphor Security"

  })

  .setTimestamp();

  await interaction.reply({

   embeds: [embed]

  });

 }

};
