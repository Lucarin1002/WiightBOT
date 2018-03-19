const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./preferences.json');
const prefix = preferencias.prefix;
const fs = require('fs');
var comandos = new Discord.Collection();

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