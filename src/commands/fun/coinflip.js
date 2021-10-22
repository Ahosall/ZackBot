const { MessageType } = require("@adiwajshing/baileys")
const { readFileSync }  = require("fs");

const { sticker } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    items = ['cara', 'coroa'];
    flip = items[Math.floor(Math.random() * items.length)];
    stk = readFileSync(`./src/assets/stickers/${flip}.webp`)

    await msg.reply(`Você conseguiu: \n\n*${flip}*`);

    client.sendMessage(msg.key.remoteJid, stk, sticker);
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'coinflip',
      description: 'Cara ou coroa?',
      usage: 'coinflip <lado da moeda>',
      category: 'Fun'
    }
  }
}