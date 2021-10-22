const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const { buttonsMessage } = MessageType


module.exports = {
  run: async (client, msg, args) => {
    const prefix = process.env.PREFIX || ':';
    let head = ['*Comandos - Zack*'];

    let commandsHelp = {
      anime: [],
      fun: [],
      utils: []
    };

    client.commands.forEach(async (cmds) => {
      let category = cmds.help.category;
      
      if (category == 'Anime') {
        if (cmds.help.aliases) {
          commandsHelp.anime.push(` *${prefix}${cmds.help.name}*:\n     *- Descrição*: ${cmds.help.description}\n     *- Alias*: ${cmds.help.aliases.join(', ')}\n     *- Como usar*: ${prefix}${cmds.help.usage}\n`)
        } else {
          commandsHelp.anime.push(` *${prefix}${cmds.help.name}*\n     *- Descrição*: ${cmds.help.description}\n     *- Como usar*: ${prefix}${cmds.help.usage}\n`)
        }
      } else if (category == 'Fun') {
        if (cmds.help.aliases) {
          commandsHelp.fun.push(` *${prefix}${cmds.help.name}*:\n     *- Descrição*: ${cmds.help.description}\n     *- Alias*: ${cmds.help.aliases.join(', ')}\n     *- Como usar*: ${prefix}${cmds.help.usage}\n`)
        } else {
          commandsHelp.fun.push(` *${prefix}${cmds.help.name}*\n     *- Descrição*: ${cmds.help.description}\n     *- Como usar*: ${prefix}${cmds.help.usage}\n`)
        }
      } else if (category == 'Utils') {
        if (cmds.help.aliases) {
          commandsHelp.utils.push(` *${prefix}${cmds.help.name}*:\n     *- Descrição*: ${cmds.help.description}\n     *- Alias*: ${cmds.help.aliases.join(', ')}\n     *- Como usar*: ${prefix}${cmds.help.usage}\n`)
        } else {
          commandsHelp.utils.push(` *${prefix}${cmds.help.name}*\n     *- Descrição*: ${cmds.help.description}\n     *- Como usar*: ${prefix}${cmds.help.usage}\n`)
        }
      }
    });

    if (args.length != 0) {
      if (args[0].toLowerCase() == 'anime') {
        cmdAnime = commandsHelp.anime.join('\n');

        msg.reply(`${head}\n Comandos de *Anime*.\n\n${cmdAnime}`)
      } else if (args[0].toLowerCase() == 'fun') {
        cmdFun = commandsHelp.fun.join('\n');

        msg.reply(`${head}\n Comandos de *Interação*.\n\n${cmdFun}`)
      } else if (args[0].toLowerCase() == 'utils') {
        cmdUtils = commandsHelp.utils.join('\n');

        msg.reply(`${head}\n Comandos *Úteis*.\n\n${cmdUtils}`)
      } else {
        msg.reply(`${head}\n*Categorias:*\n  *Fun*\n    - ${prefix}help fun\n  *Utils*\n    - ${prefix}help utils`)
        return
      }
    } else {
      const buttons = [
        {buttonId: 'btnHFun', buttonText: {displayText: '!help fun'}, type: 1},
        {buttonId: 'btnHUtils', buttonText: {displayText: '!help utils'}, type: 1}
      ]

      let buttonMsg = {
        contentText: `${head}\n\nPrefixo: ${prefix}\n\nCategorias:\n  Fun\n  Utils`,
        footerText: `Selecione um dos botões`,
        buttons: buttons,
        headerType: 1
      }

      client.sendMessage(msg.key.remoteJid, buttonMsg, buttonsMessage)
      return 
    }
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'help',
      aliases: ['menu', 'ajuda', '?'],
      description: 'Execute esse comando para obter ajuda.',
      usage: 'help <category>',
      category: 'Utils'
    }
  }
}