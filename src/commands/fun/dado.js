const { MessageType } = require("@adiwajshing/baileys")
const { readFileSync }  = require("fs");

const { sticker } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    let dados = ["dado1", "dado2", "dado3", "dado4", "dado5", "dado6"];
    let random = dados[Math.floor(Math.random() * dados.length)];
    let stkDado = readFileSync(`./src/assets/stickers/${random}.webp`)
    
    client.sendMessage(msg.key.remoteJid, stkDado, sticker, {quoted: msg});
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'dado',
      description: 'Quer que eu jogue o dado para você? Ok~',
      usage: 'dado',
      category: 'Fun'
    }
  }
}