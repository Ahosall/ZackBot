const axios = require('axios');

const { MessageType } = require("@adiwajshing/baileys");
const imageToBase64 = require('image-to-base64');

const { image } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    res = axios.get(`https://akaneko-api.herokuapp.com/api/wallpapers`).then(res => {
      imageToBase64(res.data.url)
        .then((ress) => {
            let buff = Buffer.from(ress, 'base64')
            client.sendMessage(msg.key.remoteJid, buff, image, {
                quoted: msg,
                caption: `*Link*:\n\n${res.data.url}`
            });
      })
    })
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'wallpaper',
      aliases: ['wlppr'],
      description: 'Procurando um walpaper diferente? Execute esse comando...',
      usage: 'wllpr',
      category: 'Anime'
    }
  }
}