module.exports.run = async (client, message, args) =>{

    if(!message.member.roles.find('name', 'wStaff')) {
        message.delete();
        message.reply('Somente quem tem a tag `wStaff` pode usar o w!cc ^-^')
        return;
    }

    if (message.channel.type == 'text') {
      message.channel.fetchMessages()
      .then(messages => {
          message.channel.bulkDelete(messages);
          messagesDeleted = messages.array().length;
          message.channel.send('O chat foi limpo pelo staffer '+message.author + '.');
          console.log('Mensagens deletadas com sucesso. mensagens deletadas pelo ID:'+ message.author + 'total de mensagens deletadas: ' +messagesDeleted);
      })
      .catch(err => {
          console.log('Não foi possivel deletar as mensagens ( algum bug ocorreu na hora de usar o w!cc.');
          console.log(err);
});
}
}