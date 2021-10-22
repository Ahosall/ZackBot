module.exports = {
  run: async (client, msg, args) => {
    let mesgErr = 'Por favor informe um argumento válido.\n\nPedra, Papel, ou Tesoura.';
    if (args.length < 1) return msg.reply(mesgErr)
    items = ["pedra", "papel", "tesoura"]
    ppt = items[Math.floor(Math.random() * items.length)]
    
    let win;
    if ((ppt == "pedra" && args == "papel") ||
        (ppt == "papel" && args == "tesoura") ||
        (ppt == "tesoura" && args == "pedra")) {
        win = true
    } else if ((ppt == "pedra" && args == "tesoura") ||
        (ppt == "papel" && args == "pedra") ||
        (ppt == "tesoura" && args == "papel")) {
        win = false
    } else if ((ppt == "pedra" && args == "pedra") ||
        (ppt == "papel" && args == "papel") ||
        (ppt == "tesoura" && args == "tesoura")) {
        win = 'draw'
    } else {
        return msg.reply(mesgErr)
    }

    if (win == true) {
        var mesg = "Ugh ... parabéns, você ganhou!"
    } else if (win == false) {
        var mesg = "HAhhaa, ganhei!"
    } else if (win == 'draw') {
        var mesg = "Hmmm ... você está lendo minha mente? _Calma ... mas isso não é possivel ... afinal eu sou um robô ... será?_ 🤔"
    }
    msg.reply(`Eu jogo:  *${ppt}*\n\nVocê jogou:  *${args}*\n\n${mesg}`)
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'jokenpo',
      aliases: ['ppt'],
      description: 'Vamos ver quem ganhara essa batalha?!',
      usage: 'jokenpo <pedra/papel/tesoura>',
      category: 'Fun'
    }
  }
}