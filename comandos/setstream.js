module.exports.run = async (client, message, args) =>{
    if(message.member.id == "229025905014472705") {
    
        let args = message.content.split(' ').slice(1).join(' ');
  
        if(!args){
          message.reply("Insira o novo streaming status ^-^");
        }
  
        client.user.setActivity(`${args}`, {
          type: 'STREAMING',
          url: 'https://twitch.tv/wiigevaerd',
        });
        message.reply('Streaming status alterado ^-^');
      } else {
        message.reply("Apenas o wii pode usar utilizar este comando ^-^")
      }
  
}