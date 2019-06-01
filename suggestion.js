const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = "/"


bot.on("message", message => {
if(message.content.startsWith(prefix + "suggestion")){ /// si /suggestion est dit alors
  var chann = message.guild.channels.find(chann => chann.name === "suggestion")
  if(!chann){return message.channel.send('Je ne trouve pas le salon suggestion.')} // il cherche le channel suggestion si il ne le trouve pas il le dit
  var sgt = message.content.substr(parseInt(prefix.length + 10 )) // il prend la suggestion
  if(!sgt){ return message.channel.send('Merci de mettre une suggestion.')}
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Suggestion de : " + message.author.username)
    .addField("Contenue :", sgt)
    .setTimestamp()
    chann.send(embed)

}
})

bot.login("YOUR TOKEN")
