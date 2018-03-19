module.exports.run = async (client, message, args) =>{

    const helpembed = new Discord.RichEmbed()
    .setColor('#00ffed')
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .addField('Ajuda:', 'Veja os meus comandos ^-^')
    .addField('w!coinflip', 'É um simples cara ou coroa.')
    .addField("w!ping", "Utilize esse comando para ver o meu tempo de resposta.")
    .addField("w!gerarsenha", "Gera um número aleatório que pode servir como uma senha temporária para vc.")
    .addField('────── Comandos De Moderacão ────────', 'Os comandos de moderação necessitam da tag `wStaff` para funcionarem')
    .addField("w!cc", "Comando basico para limpar o chat.")
    .addField("w!mute", "Comando de mute, necessita da tag `Mutado` para funcionar.")
    .addField("w!unmute", "Comando de unmute, necessita da tag `Mutado` para funcionar.")
    .setFooter('WiightBOT by wiigevaerd#0866 ')
    message.author.send(helpembed);
    message.delete();
    message.reply(" Enviei para você no privado, veja suas mensagens diretas! :wink:");
  }