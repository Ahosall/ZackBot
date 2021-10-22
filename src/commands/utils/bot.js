const os = require("os");
const ou = require("node-os-utils");

module.exports = {
  run: async (client, msg, args) => {
    let cpu = process.cpuUsage();
    let cpuU = cpu.user.toString()[0] + cpu.user.toString()[0];
    let cpuS = cpu.system.toString()[0] + cpu.system.toString()[1]
    
    cpu = cpuU / 100 * cpuS

    let groupSize = msg.groups.length

    let text = `*Status* - *Zack*\n\nOlá @${msg.jid.split('@')[0]} aqui está informações sobre mim ...\n\n*WhatsApp*:\n  - Status: *ON*\n  - Grupos: *${groupSize}*\n\n*Maquina*:\n  - Modelo: *${os.cpus()[0].model.split(' @')[0]}*\n  - CPU: *${cpu}%*\n  - RAM: *${parseInt(process.memoryUsage().rss/1024/1024)}Mb*\n\n*Desenvolvedor*:\n  - Ahosall`

    msg.mentions(text, [msg.jid], true)
  },
  conf: {
    onlyGroups: false
  },
  get help() {
    return {
      name: 'bot',
      aliases: ['bi', 'botinfo'],
      description: 'Comando para consultar o status do bot.',
      usage: 'bot',
      category: 'Utils'
    }
  }
}