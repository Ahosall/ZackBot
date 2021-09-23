module.exports = {
  run: async (client, msg, args) => {
    msg.reply('Comando em desenvolvimento...')
  },
  get help() {
    return {
      name: 'ban',
      description: 'Execute esse comando para banir alguém.'
    }
  }
}