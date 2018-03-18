module.exports.run = async (client, message, args) =>{

    var flip = Math.floor(Math.random() * 2 + 1);
		if (flip === 1) {
			message.reply("```diff\n+ Você tirou cara ^-^\n```");
		}
		else {
			message.reply("```diff\n- Você tirou coroa ^-^\n```");
		}

}
