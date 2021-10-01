module.exports = {
  run: async (client, msg, args) => {
    client.updatePresence(msg.key.remoteJid)

    random = `${Math.floor(Math.random() * 100)}`

    let bo;

    if (random <= 20){ 
      bo = 'Mano esse cara é hetero Kkalalallak hetero pleno 2021!';
    } else if (random <= 30){ 
      bo = 'Hmmmmmm, tu é man? 🤔';
    } else if (random < 50){ 
      bo = 'Você é né? 😏';
    } else if (random == 50){ 
      bo = 'Você é ou não? 🧐'
    } else if (random > 50){ 
      bo = 'Confirmado, ele é.'
    }

    text = `Você é ${random}% gay\n\n${bo}`
    msg.reply(text)

  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'gay',
      alias: ['gey'],
      description: 'Tu é man? 🤨',
      usage: 'gey',
      category: 'Fun'
    }
  }
}