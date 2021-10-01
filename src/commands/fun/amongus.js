const { MessageType } = require("@adiwajshing/baileys")

const { extendedText } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    let mData = await client.groupMetadata(msg.key.remoteJid);
    let participants = mData.participants

    let enemy = participants[Math.floor(Math.random() * (participants.length))];        
    let sus = `.      　。　　　　•　    　ﾟ　　。\n　　.　　　.　　　  　　.　　　　　。　　   。　.\n　.　　      。　        ඞ   。　    .    •\n•            @${enemy.jid.split('@')[0]} was E j e c t e d\n                  1 impostor remain   。　.\n　 　　。　　 　　　　ﾟ　　　.　      　　　.\n,　　　　.                  .`;

    msg.mentions(`${sus}`, [enemy.jid], true)
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'amongus',
      description: 'Quem é o impostor? 🤔.',
      usage: 'amongus',
      category: 'Fun'
    }
  }
}