const { MessageType } = require("@adiwajshing/baileys")

const { text } = MessageType;

const { isFiltered, addFilter } = require('../../utils/antispam')

module.exports = (client) => {
  return async (msg) => {
    if (!msg.hasNewMessage) return
    msg = msg.messages.all()[0]

    if (!msg.message) return
    msg.message = (Object.keys(msg.message)[0] == 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message

    if (!msg.message) return
    if (msg.key && msg.remoteJid == 'status@broadcast') return

    const content = JSON.stringify(msg.message)
    const from = msg.key.remoteJid
    const type = Object.keys(msg.message)[0]
    const ownerNumber = [`5565992374615@s.whatsapp.net`, `556592374615@s.whatsapp.net`]

    client.chatRead(from)

    const prefix = process.env.PREFIX || ':';

    let body;
    
    if (type == 'conversation' && msg.message.conversation.startsWith(prefix)) {
      body = msg.message.conversation;
    } else if (type == 'imageMessage' && msg.message.imageMessage.caption.startsWith(prefix)) {
      body = msg.message.imageMessage.caption;
    } else if (type == 'videoMessage' && msg.message.videoMessage.caption.startsWith(prefix)) {
      body = msg.message.videoMessage.caption;
    } else if (type == 'extendedTextMessage' && msg.message.extendedTextMessage.text.startsWith(prefix)) {
      body = msg.message.extendedTextMessage.text;
    } else {
      body = ''
    }

    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.slice(1).trim().split(' ').slice(1)

    const isCmd = body.startsWith(prefix)
    

    const sender = msg.key.fromMe ? client.user.jid : msg.key.remoteJid.endsWith('@g.us') ? msg.participant : msg.key.remoteJid
    const jid = sender

    if (sender.split('@')[0] == '19029372434') return
    
    const contacts = msg.key.fromMe ? client.user.jid : client.contacts[sender] || {
      notify: jid.replace(/@.+/, '')
    }

    // Function Uteis
    msg.jid = jid
    
    msg.isOwner = ownerNumber.includes(sender)
    
    msg.isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
    msg.isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    msg.isGroup = msg.key.remoteJid.endsWith('@g.us') ? true : false

    msg.reply = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: msg
      })
    }
    if (msg.isGroup) {
      const mData = await client.groupMetadata(msg.key.remoteJid);
      msg.isAdmin = mData.participants.find(participant => participant.jid == msg.jid).isAdmin
      msg.send = (msg) => {
        client.sendMessage(mData.id, msg, MessageType.text);
      }
    }

    if (isCmd && isFiltered(from) && msg.isGroup) {
      console.log(sender)
      let contentMsg = {
        text: 'Opan, sem flood por favor.',
        contextInfo: {
          mentionedJid: [sender]
        }
      }

      return msg.reply(contentMsg)
    }

    const cmd = client.commands.get(command) || client.aliases.get(command);
    if (!cmd) return
    console.log(`[LOG] ${command} executed`);
    if (cmd.conf.onlyGroups && !msg.isGroup) {
      msg.reply('Este comando só funciona em grupos.');
      return
    }
    addFilter(from)
    cmd.run(client, msg, args)
  }
}