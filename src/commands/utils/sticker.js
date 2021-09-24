const ffmpeg = require('fluent-ffmpeg');

const { MessageType } = require("@adiwajshing/baileys")
const { unlinkSync, readFileSync } = require('fs');

const { sticker } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    if ((msg.isMedia && !msg.messageMessage || msg.isQuotedImage) && args.length == 0) {
      const encMedia = msg.isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg;
      const media = await client.downloadAndSaveMediaMessage(encMedia);

      nameStk = `${Math.floor(Math.random() * 10000)}.webp`;

      await ffmpeg(`./${media}`)
        .input(media)
        .on('start', function () {
          console.log(`Started: Create sticker...`)
        })
        .on('error', function (err) {
          console.log(`Error: ${err}`)
          unlinkSync(media)
          reply(mess.error.stick)
        })
        .on('end', function () {
          console.log('Finish: Send Sticker')
          client.sendMessage(msg.key.remoteJid, readFileSync(nameStk), sticker, {quoted: msg})
          unlinkSync(media)
          unlinkSync(nameStk)
        })
        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(150,iw)':min'(150,ih)':force_original_aspect_ratio=decrease,fps=15, pad=150:150:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(nameStk)
    }
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'sticker',
      description: 'Comando para criar stickers',
      usage: 'sticker <image/gif/video>',
      category: 'Admins'
    }
  }
}