module.exports = {
  run: async (client, msg, args) => {
    const prefix = process.env.PREFIX || ':';
    let head = ['*Comandos* - *Zack*\n\n Prefixo: *' + prefix + '*\n'];

    let commandsHelp = {
      info: [],
      admins: [],
      utils: []
    };

    client.commands.forEach(async (cmds) => {
        let category = cmds.help.category;

        if (category == 'Admins') {
          if (cmds.help.aliases) {
            commandsHelp.admins.push(` *${prefix}${cmds.help.name}*:\n     - Descrição: ${cmds.help.description}\n     - Alias: ${cmds.help.aliases.join(', ')}\n     - Como usar: ${prefix}${cmds.help.usage}\n`)
          } else {
            commandsHelp.admins.push(` *${prefix}${cmds.help.name}*\n     - Descrição: ${cmds.help.description}\n     - Como usar: ${prefix}${cmds.help.usage}\n`)
          }
        } else if (category == 'Info') {
          if (cmds.help.aliases) {
            commandsHelp.info.push(` *${prefix}${cmds.help.name}*:\n     - Descrição: ${cmds.help.description}\n     - Alias: ${cmds.help.aliases.join(', ')}\n     - Como usar: ${prefix}${cmds.help.usage}\n`)
          } else {
            commandsHelp.info.push(` *${prefix}${cmds.help.name}*\n     - Descrição: ${cmds.help.description}\n     - Como usar: ${prefix}${cmds.help.usage}\n`)
          }
        } else if (category == 'Utils') {
          if (cmds.help.aliases) {
            commandsHelp.utils.push(` *${prefix}${cmds.help.name}*:\n     - Descrição: ${cmds.help.description}\n     - Alias: ${cmds.help.aliases.join(', ')}\n     - Como usar: ${prefix}${cmds.help.usage}\n`)
          } else {
            commandsHelp.utils.push(` *${prefix}${cmds.help.name}*\n     - Descrição: ${cmds.help.description}\n     - Como usar: ${prefix}${cmds.help.usage}\n`)
          }
        }

      });

    if (args.length != 0) {
      if (args[0].toLowerCase() == 'admins' || args[0].toLowerCase() == 'adm') {
        if (!msg.isOwner && !msg.isAdmin) return msg.reply('Você não tem permissão para ver essa categoria.');

        cmdAdms = commandsHelp.admins.join('\n');

        msg.reply(`${head}\n Comandos de *Administração*.\n\n${cmdAdms}`)
      } else if (args[0].toLowerCase() == 'info') {
        cmdInfo = commandsHelp.info.join('\n');

        msg.reply(`${head}\n Comandos de *Informações*.\n\n${cmdInfo}`)
      } else if (args[0].toLowerCase() == 'utils') {
        cmdUtils = commandsHelp.utils.join('\n');

        msg.reply(`${head}\n Comandos *Úteis*.\n\n${cmdUtils}`)
      } else {
        return msg.reply(`${head}\n*Categorias:*\n  *Admins*\n    - ${prefix}help admins/adm\n  *info*\n    - ${prefix}help info\n  *Utils*\n    - ${prefix}help utils`)
      }
    } else {
      return msg.reply(`${head}\n*Categorias:*\n  *Admins*\n    - ${prefix}help admins/adm\n  *info*\n    - ${prefix}help info\n  *Utils*\n    - ${prefix}help utils`)
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