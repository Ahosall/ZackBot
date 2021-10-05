module.exports = {
  run: async (client, msg, args) => {
    let mentioned = msg.message.extendedTextMessage != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
    let user = mentioned.length >= 1 ? mentioned : [msg.jid];
    
    let random = `${Math.floor(Math.random() * 100)}`

    let bo;
    
    if (random == 0) {
      bo = 'Conan'
    } else if (random <= 10) {
      bo = 'Um homem 🧐'
    } else if (random <= 20) { 
      bo = 'Mano esse cara é hetero, hetero pleno 2021 Kkaksakskakk!';
    } else if (random <= 30) { 
      bo = 'Hmmmmmm, tu é man? 🤔';
    } else if (random < 50) { 
      bo = 'Você é né? 😏';
    } else if (random == 50) { 
      bo = 'Você é ou não? 🧐'
    } else if (random <= 70) { 
      bo = '*B I C H O N A*'
    } else if (random <= 90) { 
      bo = 'Bicha assumida.'
    }  else if (random > 90) { 
      bo = 'Gay com orgulho.'
    } 

    console.log(user, mentioned.length > 1, mentioned.length)
    text = `@${user[0].split('@')[0]} é ${random}% gay\n\n${bo}`
    msg.mentions(text, user)

  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'gay',
      alias: ['gey'],
      description: 'Tu é man? 🤨',
      usage: 'gey <user>',
      category: 'Fun'
    }
  }
}