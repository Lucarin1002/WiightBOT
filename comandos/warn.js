module.exports.run = async (client, message, args) =>{
    let  user = message.metions.first();
    let  motivo = message.content.split(' ').slice(2).join(' ');
    if(!motivo){
        motivo = 'Não informado';
    }
    let  quemdeuowarn = message.author;

    if(!message.member.roles.find('name', 'wStaff')) {
        message.reply('Sem perm ^-^')
        return;
    }

    message.channel.send(`O usuário ${user}, foi alertado por ${quemdeuowarn}. Motivo: ${motivo}`);
    user.send(`Você foi alertado por ${quemdeuowarn}. Motivo: ${motivo}`)
}