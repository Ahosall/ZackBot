const { MessageType } = require("@adiwajshing/baileys")

const { extendedText, text } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    if (!msg.isOwner) return msg.reply('Você não tem permissão para usar esse comando.');
    groupsSended = []    

    await msg.reply('Enviando mensagem...')
    
    msg.groups.forEach((groups) => {
      client.sendMessage(groups.jid, `⚠ AVISO ⚠\n\n${args.join(' ')}\n\n_By Ahosall, The Developer_`, text);
      groupsSended.push(groups.name)
    })

    await msg.send(`Enviado para ${groupsSended.length} grupos.\n\n${groupsSended.join('\n')}`);
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'say',
      description: 'Comando especializado para anunciar avisos do bot.',
      usage: 'say',
      category: 'Utils'
    }
  }
}