const { MessageType } = require("@adiwajshing/baileys")

const { extendedText } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    if (args.length < 1) return msg.reply(`Você deve fazer uma pergunta...\n\nExmplo: ${process.env.PREFIX}pergunta O ademiro é um ser supremo?`);
    
    let res = ['sim', 'não', 'talvez', 'eu acho que sim', 'eu acho que não', 'bem provavel', '...'];
    let botRes = res[Math.floor(Math.random() * (res.length))];

    text = `"${args.join(' ')}"\n\nBom, segundo meus cálculos ... ${botRes}`
    msg.reply(text)
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'ask',
      aliases: ['pergunta', 'sn'],
      description: 'Quem é o impostor? 🤔.',
      usage: 'amongus <user>',
      category: 'Fun'
    }
  }
}