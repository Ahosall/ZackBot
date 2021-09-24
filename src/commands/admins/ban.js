module.exports = {
  run: async (client, msg, args) => {
    if (!msg.isOwner && !msg.isAdmin) return msg.reply('Você não tem permissão para usar esse comando.');
    let mentioned = msg.message.extendedTextMessage;
    if (mentioned == null) return msg.reply('Marque alguém para poder banir...');
    mentioned = mentioned.contextInfo.mentionedJid

    let mData = await client.groupMetadata(msg.key.remoteJid);
    let num = mData.participants.find(participant => participant.jid == mentioned[0]);

    console.log(num.jid)

    if (num.isAdmin) {
      msg.reply('Não posso banir um administrador...')
    } else {
      setTimeout(async () => {
        await client.groupRemove(mData.id, [num.jid]);
      }, 3000);
    }
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'ban',
      description: 'Execute esse comando para banir alguém.',
      usage: 'ban <user> [reason]',
      category: 'Admins'
    }
  }
}