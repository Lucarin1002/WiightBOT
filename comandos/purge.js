module.exports.run = async (client, message, args) =>{

    constructor(client) 
        super(client, {
            name: 'purge',
            group: 'wStaff',
            memberName: 'purge',
            description: 'deletes up to 100 messages at once. Handy command to use when you have a bunch of crap to delete.',
            
        });
    }

    run(message)
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            var args = message.content.split(' ');
            var amountOfMessages = args[1];
            message.channel.bulkDelete(amountOfMessages).then(messages => console.log(`${amountOfMessages.length} have been deleted`));
        } else {
            message.reply("You can't do that.");
        }