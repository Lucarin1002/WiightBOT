module.exports.run = async (client, message, args) =>{
    if(message.member.id == "229025905014472705") {
    
       client.user.setStatus("idle");
           
           message.reply('Presence status alterado ^-^');
         } else {
           message.reply("Apenas o wii pode usar utilizar este comando ^-^")
         }
}