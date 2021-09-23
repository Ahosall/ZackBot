module.exports = {
  run: async (client, msg, help) => {
    msg.reply('Comando em desenvolvimento...')
  },
  get help() {
    return {
      name: 'kick',
      description: 'Execute esse comando para expulsar alguém.'
    }
  }
}