module.exports = {
  run: async (client, msg, args) => {
    let size = `${Math.floor(Math.random() * 35)}`;

    if (size < 14) {
      pp = 'Só a fimose 🤣🤣'
    } else if (size <= 16) {
      pp = 'Eita porr- vai pegar manga com isso? 🤔'
    } else if (size <= 19) {
      pp = 'Calma mein, a mina não é um poço... 😳'
    } else if (size <= 24) {
      pp = 'Tu tem um poste no meio das pernas...'
    } else if (size >= 25) {
      pp = 'Ta procurando petróleo com isso? 🤨'
    }
    text = `Seu pau tem ${size}cm\n\n${pp}`
    msg.reply(text)
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'pau',
      aliases: ['pica', 'rola'],
      description: 'Qual o tamanho da sua 3º perna? 😏.',
      usage: 'pau',
      category: 'Fun'
    }
  }
}