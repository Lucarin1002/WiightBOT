module.exports.run = async (client, message, args) =>{

    const helpembed = new Discord.RichEmbed()
    .setColor('#ff00b2')
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .addField('Invite', 'você pode me adcionar no seu servidor com o link abaixo ^-^')
    .addField('Link:', 'https://discordapp.com/oauth2/authorize?client_id=416645125981208579&permissions=8&scope=bot')
    .setFooter('WiightBOT by wiigevaerd#0866 ')
    message.author.send(helpembed);
    message.delete();
    message.reply("veja suas mensagens privadas! :wink:");
  }