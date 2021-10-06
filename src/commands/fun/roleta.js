const fetch = require('node-fetch');
const request = require('request')

const { readFileSync } = require('fs');
const { MessageType } = require("@adiwajshing/baileys")

const { sticker, text, image, video } = MessageType;

module.exports = {
  run: async (client, msg, args) => {    
    const tube = ['Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Full'];
    const shot = tube[Math.floor(Math.random() * (tube.length))]
    
    let reloadStk = ['reload1', 'reload2', 'reload3'];
    let shootStk = ['shoot1', 'shoot2', 'shoot3'];
    
    shootStk = shootStk[Math.floor(Math.random() * (shootStk.length))];
    shootStk = readFileSync(`./src/assets/stickers/${shootStk}.webp`);

    reloadStk = reloadStk[Math.floor(Math.random() * (reloadStk.length))];
    reloadStk = readFileSync(`./src/assets/stickers/${reloadStk}.webp`);
    
    if (shot == 'Full') {
      await client.sendMessage(msg.key.remoteJid, shootStk, sticker, {quoted: msg});
      if (msg.isAdmin) {
        return client.sendMessage(msg.key.remoteJid, '_tsc... é administrador ..._', text);
      } else {
        setTimeout(async () => {
          await client.sendMessage(msg.key.remoteJid, 'Whops! HAHA Que pena, parece que chegou sua hora.', text);
          await client.groupRemove(msg.key.remoteJid, [msg.jid]);
          setTimeout(async () => {
            await client.groupAdd(msg.key.remoteJid, [msg.jid]);
          }, 10000)
        }, 2000);
      }
    } else {
      await client.sendMessage(msg.key.remoteJid, reloadStk, sticker, {quoted: msg});
      await client.sendMessage(msg.key.remoteJid, 'Huh... que sorte, pelo jeito a sua morte não é agora.', text);
    }    
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'roleta',
      description: 'Que tal brincarmos com a morte? ☠',
      usage: 'roleta',
      category: 'Fun'
    }
  }
}
