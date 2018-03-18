module.exports.run = async (client, message, args) =>{
    if(message.member.id == "229025905014472705") {
    
        let args = message.content.split(' ').slice(1).join(' ');
  
        if(!args){
          message.reply("Insira o novo playing status ^-^");
        }
  
        client.user.setActivity(`${args}`, {
          type: 'PLAYING',
        });

        message.reply('Playing status alterado ^-^');
      } else {
        message.reply("Apenas o wii pode usar utilizar este comando ^-^")
      }
  
}