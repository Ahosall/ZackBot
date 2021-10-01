module.exports = {
  run: async (client, msg, args) => {
    let mentioned = msg.message.extendedTextMessage;
    if (mentioned == null) return msg.reply('Eu preciso que você marque duas pessoas...');    
    mentioned = mentioned.contextInfo.mentionedJid
    if (mentioned.length == 1 || mentioned.length < 2) return msg.reply('Eu preciso que você marque duas pessoas...');
    
    let random = `${Math.floor(Math.random() * 100)}`;

    let mesg;
    if (random <= 10) {
      mesg = `Maninho vai dormir ela já viu tua mensagem e não quer responder msm.. no whatsapp dela tem pelo menos 250 mensagens de outros manos iguais a vc que ela tbm não ta nem ai.. seguinte amanhã tu vai acordar e vai botar na tua cabeça q VOCÊ só precisa de vc msm entendeu? boa noite 👊`
    } else if (random <= 30) {
      mesg = 'Talvez ... se ele(a) te notasse ....'
    } else if (random <= 50) {
      mesg = `Hmmm .... o que temos aqui ... dois pombinhos`
    } else if (random <= 70) {
      mesg = 'Vai ter casamento ? Se sim, não esqueça de convidar os amiguinhos 😁'
    } else if (random > 70) {
      mesg = 'Então ... nasceram um para o outro, nem a morte os separam!'
    }

    text = `@${mentioned[0].split('@')[0]} tem uma chance de ${random}% de namorar com @${mentioned[1].split('@')[0]}\n\n${mesg}`
    msg.mentions(text, mentioned, true, {quted: msg});    
  },
  conf: {
    onlyGroups: true
  },
  get help() {
    return {
      name: 'shipp',
      aliases: ['casal', 'ship'],
      description: 'Hmmm, qual será o casal de hoje? 💓',
      usage: 'casal <user1> <user2>',
      category: 'Fun'
    }
  }
}