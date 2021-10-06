const { MessageType } = require("@adiwajshing/baileys")

const { extendedText, text } = MessageType;

module.exports = {
  run: async (client, msg, args) => {
    if (!msg.isOwner) return msg.reply('Você não tem permissão para usar esse comando.');

    const clean = text => {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }

    try {
      const code = args.join(' ');
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      
      msg.reply(`*Result*\n\`\`\`\n${clean(evaled)}\n\`\`\``)
    } catch(err) {
      msg.reply(`*Error*\n\n${clean(err)}`)
    }
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'eval',
      description: 'Comando para testar código.',
      usage: 'eval <code>',
      category: 'Utils'
    }
  }
}