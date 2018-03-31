module.exports.run = async (client, message, args) => {

    const Discord = require('discord.js');

    let usuario = message.mentions.members.first();

    let motivo = message.content.split(' ').slice(2).join(' ');

    let staffer = message.author;
    
    var servidor = message.guild.name;

    if( message.member.hasPermission('BAN_MEMBERS')) {

    if(!usuario) return message.reply('menciona o @ para banir');

    if(!motivo) return message.reply('Insira um motivo para banir');

    const banembed = new Discord.RichEmbed()

    .setColor('#00ffed')
    .setTimestamp()
    .setThumbnail(' https://i.pinimg.com/originals/ab/ec/37/abec3703cbe24c2e1bc3fb996235e7dd.jpg')
    .addField('Ação', 'BAN')
    .addField('Staffer', `${staffer}`)
    .addField('Usuário banido', `${usuario}`)
    .addField('Motivo', `${motivo}`)
    .setAuthor("hyper was here // wii wasn't here");


        usuario.ban(`${motivo}`)
        message.delete();
        message.channel.send("", {banembed});
        usuario.send(`Olá, você foi banido pelo staffer ${staffer}, No servidor ${servidor}. Motivo: ${motivo}`);

    } else {
        message.channel.send("Você não tem um cargo com a permissão BAN_MEMBERS")
    }


  

    
}