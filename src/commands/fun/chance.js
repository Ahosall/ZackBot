module.exports = {
  run: async (client, msg, args) => {
    if (args.length < 1) return msg.reply(`Digite corretamente!\n\n${process.env.PREFIX}chance do Ahosall curtir um bom yaoi`);
    let random = `${Math.floor(Math.random() * 100)}`;
    let text = `É de ${random}% ...`
    msg.reply(text)
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'chance',
      description: 'Qual é sua chance de...',
      usage: 'chance <msg>',
      category: 'Fun'
    }
  }
}