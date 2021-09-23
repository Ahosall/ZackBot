module.exports = {
  run: async (client, msg, args) => {
    let text = ['*Menu*\n']
    client.commands.forEach(async (cmds) => {
      text.push(`  *${cmds.help.name}*\n     - ${cmds.help.description}\n`)
    })

    msg.reply(text.join(' '))
  },
  get help() {
    return {
      name: 'help',
      aliases: ['menu', 'ajuda', '?'],
      description: 'Execute esse comando para obter ajuda.'
    }
  }
}