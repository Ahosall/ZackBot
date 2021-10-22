const axios = require('axios');

const { MessageType } = require("@adiwajshing/baileys");
const imageToBase64 = require('image-to-base64');

const { image } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    let codeErr = Math.floor(Math.random() * 1000)
    res = axios.get(`https://nekos.life/api/v2/img/avatar`).then(res => {
      imageToBase64(res.data.url)
      .then((ress) => {
          let buff = Buffer.from(ress, 'base64')
          client.sendMessage(msg.key.remoteJid, buff, image, {
              quoted: msg
          })
      }).catch((err) =>{
        console.log(`Err: ${codeErr}\n\n${err}\n\n`);
        return msg.reply(`Erro ao executar comando, consulte o desenvolvedor.\n\n*Código do Erro*: ${codeErr}`);
      });
    })
  },
  conf: {
    onlyGroups: true,
    stts: 'Off'
  },
  get help() {
    return {
      name: 'animeavatars',
      aliases: ['avatars'],
      description: 'Já ta na hora de trocar esse avatar né?',
      usage: 'avatars',
      category: 'Anime'
    }
  }
}