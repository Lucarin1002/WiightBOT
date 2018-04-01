module.exports.run = async (client, message, args) => {

    if  (!message.member.hasPermissions(["BAN_MEMBERS"])) return message.reply("__***você não tem permissão para BANIR!***__");
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
   
    if (message.mentions.users.size < 1) return message.reply('__***Memcione o usuário para banir***__').catch(console.error);
   
    if (reason.length < 1) return message.reply('__***Insira um motivo para poder banir!***__');
    
    if (!message.guild.member(user).bannable) return message.reply("__***Infelismente eu não posso banir esse usuário!***__");
    let member = message.guild.member(user).ban(0)
 
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setTimestamp()
        .addField('Ação:', '__***BAN***__')
        .addField('Usuário:', `${user.username}`)
        .addField('Staffer:', `${message.author.username}`)
        .addField('Motivo', reason)
        .setFooter('WiightBOT™ ᴮᴱᵀᴬ')
    return message.channel.sendEmbed(embed).catch(console.error);
   
}
    