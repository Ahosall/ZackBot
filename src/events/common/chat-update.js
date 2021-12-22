const Enmap = require('enmap');

const { MessageType } = require('@adiwajshing/baileys')

const { buttonsMessage, extendedText, text } = MessageType;

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
    const ownerNumber = ['556592374615@s.whatsapp.net', '5565992374615@s.whatsapp.net']

    client.chatRead(from)

    const prefix = '$';

    let body;

    if (type == 'conversation' && msg.message.conversation.startsWith(prefix)) {
      body = msg.message.conversation;
    } else if (type == 'imageMessage' && msg.message.imageMessage.caption.startsWith(prefix)) {
      body = msg.message.imageMessage.caption;
    } else if (type == 'videoMessage' && msg.message.videoMessage.caption.startsWith(prefix)) {
      body = msg.message.videoMessage.caption;
    } else if (type == 'extendedTextMessage' && msg.message.extendedTextMessage.text.startsWith(prefix)) {
      body = msg.message.extendedTextMessage.text;
    } else if (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedDisplayText.startsWith(prefix)) {
      body = msg.message.buttonsResponseMessage.selectedDisplayText;
    } else {
      body = ''
    }

    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.slice(1).trim().split(' ').slice(1)

    const isCmd = body.startsWith(prefix)

    const sender = msg.key.fromMe ? client.user.jid : msg.key.remoteJid.endsWith('@g.us') ? msg.participant : msg.key.remoteJid
    const jid = sender
    
    const contacts = msg.key.fromMe ? client.user.jid : client.contacts[sender] || {
      notify: jid.replace(/@.+/, '')
    }
    
    // Function Utils
    msg.jid = jid
    msg.groups = client.chats.array;
    
    msg.isOwner = ownerNumber.includes(sender)
    
    msg.isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
    msg.isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
    msg.isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    msg.isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    msg.isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    msg.isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    msg.isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
    msg.isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

    msg.isGroup = msg.key.remoteJid.endsWith('@g.us') ? true : false

    // Não vai mais responder os statuskkkk
    if (msg.jid.split('@')[0] == 'status') return
    else if (msg.jid.split('@')[0] == '16784345779') return

    msg.reply = (string) => {
      client.sendMessage(from, string, text, {
        quoted: msg
      })
      return msg
    }

    msg.send = (string) => {
      client.sendMessage(from, string, text)
      return msg
    }

    msg.mentions = (string, data, id) => {
      if (id == null || id == undefined || id == false) {
        client.sendMessage(msg.key.remoteJid, string.trim(), extendedText, {
          contextInfo: {
            "mentionedJid": data
          }
        })
      } else {
        client.sendMessage(msg.key.remoteJid, string.trim(), extendedText, {
          quoted: msg,
          contextInfo: {
            "mentionedJid": data
          }
        })
      }
    }

    msg.buttons = (buttons, quote) => {
      if (quote != false || quote != undefined) {    
        client.sendMessage(msg.key.remoteJid, buttons, buttonsMessage, {quoted: msg})
      } else {
        client.sendMessage(msg.key.remoteJid, buttons, buttonsMessage)
      }
    }

    if (msg.isGroup) {
      const mData = await client.groupMetadata(msg.key.remoteJid);

      msg.group = mData;

      client.user.adm = mData.participants.find(participant => participant.jid == msg.jid).isAdmin
      msg.isAdmin = mData.participants.find(participant => participant.jid == msg.jid).isAdmin
      
      msg.send = (msg) => {
        client.sendMessage(mData.id, msg, MessageType.text);
      }

    }
    
    const cmd = client.commands.get(command) || client.aliases.get(command);
    if (!cmd) return
    
    if (cmd.conf.stts == 'Off') return
    //if (!msg.isOwner) return msg.reply('Bot em modo de desenvolvimento.')
    console.log(`[LOG] ${msg.jid.split('@')[0]} ran ${cmd.help.name}.`);
    if (cmd.conf.onlyGroups && !msg.isGroup) return msg.reply('Este comando só funciona em grupos.');
    try {
      cmd.run(client, msg, args)
    } catch (err) {
      msg.send('Whoops... parece que houve um erro... se ele persistir, contate o desenvolvedor.')
      console.log('---\n', err)
    }
  }
}
