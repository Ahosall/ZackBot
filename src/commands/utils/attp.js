const { MessageType } = require('@adiwajshing/baileys')

const { sticker } = MessageType

const { getBuffer } = require('../../utils/functions');

module.exports = {
  run: async (client, msg, args) => {
    if (args.length < 1) return msg.reply(`O comando necessita de um argumento.\n\n${process.env.PREFIX}attp Ahos Supremacy`);

    msg.reply('Aguarde um momento por favor, estou criando seu sticker.')
    
    stk = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(args.join(' '))}`)
    client.sendMessage(msg.key.remoteJid, stk, sticker, {quoted: msg});
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'attp',
      description: 'Crie stk, de texto animadas.',
      usage: 'attp <mensagem>',
      category: 'Utils'
    }
  }
}