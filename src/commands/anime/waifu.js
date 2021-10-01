const axios = require('axios');

const { MessageType } = require("@adiwajshing/baileys");
const imageToBase64 = require('image-to-base64');

const { image } = MessageType;

module.exports = {
  run: async (client, msg, args) => {    
    res = axios.get(`https://nekos.life/api/v2/img/waifu`).then(res => {
      imageToBase64(res.data.url)
        .then((ress) => {
            let buff = Buffer.from(ress, 'base64')
            client.sendMessage(msg.key.remoteJid, buff, image, {
                quoted: msg
            });
      })
    })
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'waifu',
      aliases: ['wf'],
      description: 'Qual será a sua waifu?',
      usage: 'waifu',
      category: 'Anime'
    }
  }
}