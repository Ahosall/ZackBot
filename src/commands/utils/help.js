module.exports = {
  run: async (client, msg, args) => {
    let text = ['*Comandos* - *Zack*\n\n'];

    client.commands.forEach(async (cmds) => {
      let command;
      let category = cmds.help.category;
      
      if (cmds.help.aliases) {
        command = ` *${cmds.help.name}*:\n     - Descrição: ${cmds.help.description}\n     - Alias: ${cmds.help.aliases.join(', ')}\n     - Como usar: ${cmds.help.usage}\n`
      } else {
        command = ` *${cmds.help.name}*\n     - Descrição: ${cmds.help.description}\n     - Como usar: ${cmds.help.usage}\n`
      }

      text.push(command)
    })

    msg.reply(text.join(' '))
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'help',
      aliases: ['menu', 'ajuda', '?'],
      description: 'Execute esse comando para obter ajuda.',
      usage: 'help',
      category: 'Admins'
    }
  }
}