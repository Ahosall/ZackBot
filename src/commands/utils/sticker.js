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
        .on('start', function() {
          msg.reply('Aguarde um pouco ... estou criando seu sticker...')
        })
        .on('error', function(err) {
          console.log(`Error: ${err}`)
          unlinkSync(media)
          msg.reply('Hmmm, houve um erro ao criar o sticker... tente novamente com outra imagem.')
        })
        .on('end', function() {
          client.sendMessage(msg.key.remoteJid, readFileSync(nameStk), sticker, {quoted: msg})
          unlinkSync(media)
          unlinkSync(nameStk)
        })
        .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(350,iw)':min'(350,ih)':force_original_aspect_ratio=decrease,fps=15, pad=350:350:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(nameStk)

    } else if ((msg.isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
        const encmedia = msg.isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
        const media = await client.downloadAndSaveMediaMessage(encmedia)

        nameStk = `${Math.floor(Math.random() * 10000)}.webp`;

        await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function() {
              msg.reply('Aguarde um pouco ... estou criando seu sticker...')
            })
            .on('error', function(err) {
              console.log(`Error: ${err}`)
              unlinkSync(media)
              msg.reply('Hmmm, houve um erro ao criar o sticker... tente novamente com outra imagem.')
            })
            .on('end', function() {
              client.sendMessage(msg.key.remoteJid, readFileSync(nameStk), sticker, {quoted: msg})
              unlinkSync(media)
              unlinkSync(nameStk)
            })
            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
            .toFormat('webp')
            .save(nameStk)
    } else {
      msg.reply('Marque uma imagem por favor...')
    }
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'sticker',
      aliases: ['stk', 'f', 'figu', 's', 'figurinha'],
      description: 'Comando para criar stickers',
      usage: 'sticker <image/gif/video>',
      category: 'Utils'
    }
  }
}