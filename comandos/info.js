module.exports.run = async (client, message, args) =>{
exports.commands = new Object();
exports.commands.info = {
	usage: '',
	description: 'Mostra o criador do bot, uptime, Discord oficial and the invite link.',
	command: (msg) => {
		var seconds = Math.floor(process.uptime());
		var days = Math.floor(seconds / (3600*24));
		seconds  -= days*3600*24;
		var hrs   = Math.floor(seconds / 3600);
		seconds  -= hrs*3600;
		var mnts = Math.floor(seconds / 60);
		seconds  -= mnts*60;
		msg.channel.send({
			'embed': {
				'description': '**WiightBOT**',
				'color': 3145472,
				'author': {
					'name': msg.author.username + '#' + msg.author.discriminator,
					'icon_url': msg.author.avatarURL
				},
				'fields': [
					{
						'name': 'Criador',
						'value': 'wiigevaerd#0866',
						'inline': true
					},
					{
						'name': 'Discord Oficial',
						'value': 'https://discord.me/batatafreitas',
						'inline': true
					},
					{
						'name': 'Invite link',
						'value': 'https://discordapp.com/oauth2/authorize?client_id=416645125981208579&permissions=8&scope=bot',
						'inline': true
					},
					{
						'name': 'Uptime',
						'value': days+' dias, '+hrs+' Horas, '+mnts+' Minutos, '+seconds+' Segundos',
						'inline': true
					},
				]
			}
		}
		);
	}
};
}