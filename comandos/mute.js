module.exports.run = async (client, message, args) =>{

    let myRole = message.guild.roles.get("409032308402683906");
    let user = message.mentions.users.first();
    let staff = message.author;
    
    if(!message.member.roles.find("name", "wStaff")) {
        message.reply("Sem perm")
        return;
    }
    if (message.mentions.users.size < 1) {
        message.reply('Insira algum usuário para mutar.');
        return;
    }
    
    let reason = message.content.split(' ').slice(2).join(' ');
    if(!reason){
        reason = "Não informado";
    }
    
        message.delete();
        let role = message.guild.roles.find("name", "Mutado");
    
        if(!role) {
            message.channel.send("Por favor crie um cargo com o nome `Mutado`.");
            return;
        }
    
        let member = message.mentions.members.first();
        if(member.roles.has(role)){
            message.reply("Este usuário ja está mutado.")
        } else{
            member.addRole(role);
            message.channel.send(`O usuário ${member}, foi mutado por ${staff}. Motivo: ${reason}`);
            user.send(`Olá, você foi mutado pelo staffer ${staff}. Motivo: ${reason} , e isso não é bom, bem, explicando: Você não poderá falar nos chats por um determinado tempo ou, dependendo do que você fez, permanentemente,se você foi mutado temporáriamente, após o fim do seu mute,contate um staffer, tenha um bom dia.`);
        }
    
    }