module.exports = {
  run: async (client, msg, args) => {
    let chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
    let gado = chifre[Math.floor(Math.random() * chifre.length)];

    text = `Você é um...\n\n*${gado}*`
    msg.reply(text)
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'gado',
      aliases: ['gadometro'],
      description: 'Vamos ver o quão gado você é? 🐂',
      usage: 'gado',
      category: 'Fun'
    }
  }
}