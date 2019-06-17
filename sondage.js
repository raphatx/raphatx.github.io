bot.on('message', message => {
    var prefix = "/"
    if(message.content.startsWith(prefix + "sondage")){
    const args = message.content.split(";");
      var question = args.slice(1, 2);
      if(!question) { return message.channel.send('Merci de mettre une question.')}
      var rep = args.slice(2, 3)
      if(!rep) { return message.channel.send('Merci de mettre une réponse.')}
      var rep2 = args.slice(3, 4);
      if(!rep2) { return message.channel.send('Merci de mettre une deuxième réponse.')}
      
        const embed = new Discord.RichEmbed()
        .setDescription(question)
        .addField(rep, "👍")
        .addField(rep2, "👎")
  
        message.channel.send(embed)
        .then(function (message) {
          message.react("👍")
          message.react("👎")
        }).catch(function() {
          console.log('err')
        });
      }
    })
    
    