const { MessageType } = require("@adiwajshing/baileys")

const { extendedText, text } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    if (!msg.isAdmin) return msg.reply('Você não tem permissão para usar esse comando.');
    
    let participants = msg.group.participants;
    let listNum = []
    let listMen = []

    participants.forEach(participant => {
      listMen.push(`@${participant.jid.split('@')[0]}`)
      listNum.push(participant.jid)
    })

    msg.mentions(`${args.join(' ')}\n\n${listMen.join('\n')}`, listNum, true);
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'marcar',
      description: 'Comando para marcar geral.',
      usage: 'marcar',
      category: 'Utils'
    }
  }
}