const axios = require('axios');

const { MessageType } = require("@adiwajshing/baileys");
const imageToBase64 = require('image-to-base64');

const { image } = MessageType;

module.exports = {
  run: async (client, msg, args) => {    
    let mentioned = msg.message.extendedTextMessage;
    if (mentioned == null || mentioned.contextInfo.mentionedJid == undefined) return msg.reply('Marque uma pessoa...');    
    mentioned = mentioned.contextInfo.mentionedJid;

    res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
      imageToBase64(res.data.url)
        .then((ress) => {
            let buff = Buffer.from(ress, 'base64')
            client.sendMessage(msg.key.remoteJid, buff, image, {
                quoted: msg,
                caption: `@${msg.jid.split('@')[0]} deu tapinhas n@ @${mentioned[0].split('@')[0]}!`,
                contextInfo: {"mentionedJid": [mentioned[0], msg.jid]}
            });
      })
    })
  },
  conf: {
    onlyGroups: true,
    stts: 'Off'
  },
  get help() {
    return {
      name: 'tapinha',
      aliases: ['pat'],
      description: 'Tapinha ...',
      usage: 'pat <user>',
      category: 'Anime'
    }
  }
}