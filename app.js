var _0x1c90=['bgBlue','\x20\x20\x20\x20\x20WiightBOT\x20iniciado\x20\x20\x20\x20\x20','green','setUsername','WiightBOT™\x20ᴮᴱᵀᴬ','author','content','toUpperCase','slice','lenght','split','startsWith','length','trim','shift','toLowerCase','.js','error','message','w!ajuda','setColor','#00ffed','setTimestamp','setThumbnail','avatarURL','addField','Ajuda:','Veja\x20os\x20meus\x20comandos\x20^-^','w!coinflip','Utilize\x20esse\x20comando\x20para\x20ver\x20o\x20meu\x20tempo\x20de\x20resposta.','Gera\x20um\x20número\x20aleatório\x20que\x20pode\x20servir\x20como\x20uma\x20senha\x20temporária\x20para\x20vc.','w!tempo\x20<local>','Comando\x20simples\x20para\x20ver\x20o\x20tempo\x20no\x20local\x20desejado\x20^-^\x20(\x20Exemplo:\x20w!tempo\x20são\x20paulo\x20)','w!invite','Quer\x20me\x20adcionar\x20em\x20seu\x20servidor\x20???\x20use\x20w!invite\x20^-^','Os\x20comandos\x20de\x20moderação\x20necessitam\x20da\x20tag\x20`wStaff`\x20para\x20funcionarem','w!cc','Comando\x20basico\x20para\x20limpar\x20o\x20chat.','w!mute','w!unmute','Comando\x20de\x20unmute,\x20necessita\x20da\x20tag\x20`Mutado`\x20para\x20funcionar.','setFooter','WiightBOT\x20by\x20wiigevaerd#0866\x20','send','delete','reply','\x20Enviei\x20para\x20você\x20no\x20privado,\x20veja\x20suas\x20mensagens\x20diretas!\x20:wink:','RichEmbed','https://i.imgur.com/HkTaKoa.png','você\x20pode\x20me\x20adcionar\x20no\x20seu\x20servidor\x20com\x20o\x20link\x20abaixo\x20^-^','──────\x20Link\x20────────','https://discordapp.com/oauth2/authorize?client_id=416645125981208579&scope=bot&permissions=66186303','veja\x20suas\x20mensagens\x20privadas!\x20:wink:','discord.js','colors','prefix','Collection','login','env','BOT_TOKEN','ready','log','WiightPrefix:\x20','cyan','Logado\x20na\x20conta\x20','user','tag','\x20^-^','bgMagenta','setActivity','https://twitch.tv/wiigevaerd','────────────────────────────'];(function(_0x171208,_0x4f7a39){var _0x438465=function(_0x5a5714){while(--_0x5a5714){_0x171208['push'](_0x171208['shift']());}};_0x438465(++_0x4f7a39);}(_0x1c90,0x155));var _0x275d=function(_0x4d1844,_0x6d0a92){_0x4d1844=_0x4d1844-0x0;var _0x484dd6=_0x1c90[_0x4d1844];return _0x484dd6;};const Discord=require(_0x275d('0x0'));const colors=require(_0x275d('0x1'));const client=new Discord['Client']();const preferencias=require('./preferences.json');const prefix=preferencias[_0x275d('0x2')];const fs=require('fs');var comandos=new Discord[(_0x275d('0x3'))]();client[_0x275d('0x4')](process[_0x275d('0x5')][_0x275d('0x6')]);client['on'](_0x275d('0x7'),()=>{console[_0x275d('0x8')]((_0x275d('0x9')+prefix)[_0x275d('0xa')]);console[_0x275d('0x8')]((_0x275d('0xb')+client[_0x275d('0xc')][_0x275d('0xd')]+_0x275d('0xe'))[_0x275d('0xf')]);client[_0x275d('0xc')][_0x275d('0x10')]('',{'type':'','url':_0x275d('0x11')});console[_0x275d('0x8')](_0x275d('0x12')[_0x275d('0x13')]);console['log'](_0x275d('0x14')[_0x275d('0x15')]);console[_0x275d('0x8')](_0x275d('0x12')[_0x275d('0x13')]);});client['on']('message',_0x5aa09b=>{client[_0x275d('0xc')][_0x275d('0x16')](_0x275d('0x17'));var _0x4b9af0=_0x5aa09b[_0x275d('0x18')];var _0x53091f=_0x5aa09b[_0x275d('0x19')][_0x275d('0x1a')]();var _0x40e155=_0x5aa09b[_0x275d('0x19')][_0x275d('0x1b')](prefix[_0x275d('0x1c')])[_0x275d('0x1d')]('');if(!_0x5aa09b[_0x275d('0x19')][_0x275d('0x1e')](prefix))return;const _0x190e28=_0x5aa09b['content'][_0x275d('0x1b')](prefix[_0x275d('0x1f')])[_0x275d('0x20')]()[_0x275d('0x1d')](/ +/g);const _0x3d4e8c=_0x190e28[_0x275d('0x21')]()[_0x275d('0x22')]();try{let _0xdf7ea3=require('./comandos/'+_0x3d4e8c+_0x275d('0x23'));_0xdf7ea3['run'](client,_0x5aa09b,_0x190e28);}catch(_0x5f36f1){console[_0x275d('0x24')](_0x5f36f1);}});client['on'](_0x275d('0x25'),_0x3c23c8=>{if(_0x3c23c8[_0x275d('0x19')][_0x275d('0x1e')](_0x275d('0x26'))){const _0x3f2216=new Discord['RichEmbed']()[_0x275d('0x27')](_0x275d('0x28'))[_0x275d('0x29')]()[_0x275d('0x2a')](client[_0x275d('0xc')][_0x275d('0x2b')])[_0x275d('0x2c')](_0x275d('0x2d'),_0x275d('0x2e'))[_0x275d('0x2c')](_0x275d('0x2f'),'É\x20um\x20simples\x20cara\x20ou\x20coroa.')[_0x275d('0x2c')]('w!ping',_0x275d('0x30'))['addField']('w!gerarsenha',_0x275d('0x31'))[_0x275d('0x2c')](_0x275d('0x32'),_0x275d('0x33'))['addField'](_0x275d('0x34'),_0x275d('0x35'))[_0x275d('0x2c')]('──────\x20Comandos\x20De\x20Moderacão\x20────────',_0x275d('0x36'))[_0x275d('0x2c')](_0x275d('0x37'),_0x275d('0x38'))[_0x275d('0x2c')](_0x275d('0x39'),'Comando\x20de\x20mute,\x20necessita\x20da\x20tag\x20`Mutado`\x20para\x20funcionar.')[_0x275d('0x2c')](_0x275d('0x3a'),_0x275d('0x3b'))[_0x275d('0x3c')](_0x275d('0x3d'));_0x3c23c8['author'][_0x275d('0x3e')](_0x3f2216);_0x3c23c8[_0x275d('0x3f')]();_0x3c23c8[_0x275d('0x40')](_0x275d('0x41'));}});client['on'](_0x275d('0x25'),_0x5df14b=>{if(_0x5df14b[_0x275d('0x19')][_0x275d('0x1e')](_0x275d('0x34'))){const _0x388b0d=new Discord[(_0x275d('0x42'))]()[_0x275d('0x27')]('#ff00b2')[_0x275d('0x29')]()['setThumbnail'](_0x275d('0x43'))[_0x275d('0x2c')]('Invite',_0x275d('0x44'))[_0x275d('0x2c')](_0x275d('0x45'),_0x275d('0x46'))[_0x275d('0x3c')]('WiightBOT\x20by\x20wiigevaerd#0866\x20');_0x5df14b[_0x275d('0x18')]['send'](_0x388b0d);_0x5df14b[_0x275d('0x3f')]();_0x5df14b[_0x275d('0x40')](_0x275d('0x47'));}});