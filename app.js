const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./preferences.json');
const prefix = preferencias.prefix;
const fs = require('fs');
var comandos = new Discord.Collection();
var weather = require('weather-js');

client.login(process.env.BOT_TOKEN);

client.on('ready', () =>{

console.log(`WiightPrefix: ${prefix}`.cyan);
console.log(`Logado na conta ${client.user.tag} ^-^`.bgMagenta);
    client.user.setActivity('',
    {type: '', url: 'https://twitch.tv/wiigevaerd'});
    console.log('────────────────────────────'.bgBlue);
    console.log('     WiightBOT iniciado     '.green);
    console.log('────────────────────────────'.bgBlue);
});


client.on('message', message =>{
	  client.user.setUsername("WiightBOT™ ᴮᴱᵀᴬ");

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');

if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on('message', message => {

  if(message.content.startsWith('w!ajuda')){

  const helpembed = new Discord.RichEmbed()
  .setColor('#00ffed')
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  .addField('Ajuda:', 'Veja os meus comandos ^-^')
  .addField('w!coinflip', 'É um simples cara ou coroa.')
  .addField("w!ping", "Utilize esse comando para ver o meu tempo de resposta.")
  .addField("w!gerarsenha", "Gera um número aleatório que pode servir como uma senha temporária para vc.")
  .addField('────── Comandos De Moderacão ────────', 'Os comandos de moderação necessitam da tag `wStaff` para funcionarem')
  .addField("w!cc", "Comando basico para limpar o chat.")
  .addField("w!mute", "Comando de mute, necessita da tag `Mutado` para funcionar.")
  .addField("w!unmute", "Comando de unmute, necessita da tag `Mutado` para funcionar.")
  .setFooter('WiightBOT by wiigevaerd#0866 ')
  message.author.send(helpembed);
  message.delete();
  message.reply(" Enviei para você no privado, veja suas mensagens diretas! :wink:");

}

});

client.on('message', message => {

if(message.content.startsWith('w!invite')){

  const helpembed = new Discord.RichEmbed()
  .setColor('#ff00b2')
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  .addField('Invite', 'você pode me adcionar no seu servidor com o link abaixo ^-^')
  .addField('L────── Link ────────', 'https://discordapp.com/oauth2/authorize?client_id=416645125981208579&permissions=8&scope=bot')
  .setFooter('WiightBOT by wiigevaerd#0866 ')
  message.author.send(helpembed);
  message.delete();
  message.reply("veja suas mensagens privadas! :wink:");
  
}

});