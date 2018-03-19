module.exports.run = async (client, message, args) =>{
let user = message.mentions.users.first();
let staff = message.author;
let canal = client.channels.get("408803612551020544");

if(!message.member.roles.find("name", "wStaff")) {
    message.reply("Somente quem tem a tag `wStaff` pode usar o w!unmute ^-^")
    return;
}
if (message.mentions.users.size < 1) {
    message.reply('Insira algum usuário para desmutar.');
    return;
}
    message.delete();
    let role = message.guild.roles.find("name", "Mutado");
    let member = message.mentions.members.first();
    if(member.roles.has(role.id)){
        member.removeRole(role);
        message.channel.send(`O usuário ${member}, foi desmutado por ${staff}.`);
        user.send(`Olá, você foi desmutado pelo staffer ${staff}.`);
    } else{
        message.reply("Este usuário não está mutado.")
    }

}