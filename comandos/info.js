module.exports.run = async (client, message, args) =>{

    message.delete();
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    let member = message.guild.member(user);
    let roles = [];
    if (member.roles.size > 0) {
      member.roles.forEach(r => {
        if (!r.name.includes("everyone")) {
          roles.push(r.name);
        }
      })
    } else {
      roles = "nenhum";
    }
    let ttt = (member.roles.size > 0) ? roles.length : "0";
    let wato = (roles.length > 0) ? roles.join(", ") : "nenhum";
    let embed = {
      author: {
        name: "Informações sobre " + user.username,
        icon_url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
      },
      color: 0x7514ad,
      thumbnail: {
        url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
      },
      fields: [{
        name: "Nome de usuario",
        value: user.username + "#" + user.discriminator,
        inline: true
      }, {
        name: "ID",
        value: user.id,
        inline: true
      }, {
        name: "Nome",
        value: (member.nickname !== null) ? member.nickname : user.username,
        inline: true
      }, {
        name: "Entrou em",
        value: member.joinedAt.toString(),
        inline: true
      }, {
        name: "Conta criada em",
        value: user.createdAt,
        inline: true
      }, {
        name: "Cargos",
        value: wato,
        inline: true
      }]
    }
    message.channel.send("", {
      embed
    });
}