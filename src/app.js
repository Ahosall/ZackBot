require('dotenv').config()

const { WAConnection, Mimetype } = require('@adiwajshing/baileys')
const { readdirSync, existsSync } = require('fs');

const Enmap = require('enmap');

async function start() {
    const client = new WAConnection();
    
    // Configs
    client.logger.level = 'warn'

    // Defaults
    client.commands = new Enmap()
    client.aliases = new Enmap()

    // Load Commands
    console.log('Loading commands')
    readdirSync('./src/commands').forEach(dir => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith(".js"));
        
        commands.forEach(f => {
            try {
              const props = require(`./commands/${dir}/${f}`);
              
              if (props.help.aliases) {
                props.alias = true;
                client.commands.set(props.help.name, props);
        
                props.help.aliases.forEach(alias => {
                  client.aliases.set(alias, props)
                });
        
                console.log(`  [OK] ${dir} - ${props.help.name} [${props.help.aliases}]`);
              } else {
                client.commands.set(props.help.name, props)
                console.log(`  [OK] ${dir} - ${props.help.name}`);
              }
              
              
            } catch (e) {
              console.log('Erro ao carregar o comando:', f.replace('.js', ''), '\n\nError: \n', e, '\n')
            }
          })
    });

    // Load required events 
    console.log('\nLoading required events...')
    readdirSync('./src/events/required').forEach(async f => {
        const eventName = f.split('.')[0]
        const event = require(`./events/required/${f}`)        
        
        try {
            client.on(eventName, await event(client))
            console.log('  [OK]:', eventName)
        } catch(err) {
            console.log('Erro ao carregar o evento:', f.replace('.js', ''), '\n\nError:', err)
        }
    });

    // Check info
    existsSync('./auth_info.json') && client.loadAuthInfo('./auth_info.json');

    // Connect
    await client.connect({timeoutMs: 60 * 1000});
    
    // Load common events
    console.log('\nLoading common events...')
    await readdirSync('./src/events/common').forEach(async f => {
        const eventName = f.split('.')[0]
        const event = require(`./events/common/${f}`)
        
        try {
            client.on(eventName, await event(client))
            console.log('  [OK]:', eventName)
        } catch(err) {
            console.log('Erro ao carregar o evento:', f.replace('.js', ''), '\n\nError:', err)
        }
    });
    await console.log('\nStatus:')
};

console.clear();
console.log('Initializing...\n')
start()