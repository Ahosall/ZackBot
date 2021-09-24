module.exports = {
  run: async (client, msg, help) => {
    msg.reply('Comando em desenvolvimento...')
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'kick',
      description: 'Execute esse comando para expulsar alguém.',
      usage: 'kick <user> [reason]',
      category: 'Admins'
    }
  }
}