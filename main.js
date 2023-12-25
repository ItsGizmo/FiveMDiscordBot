const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = "."; // this is how you will use your commands (example: .rules)

const fs = require('fs');

const memberCounter = require('./counters/member-counter');
const unbanCommand = require('./commands/unban');

  

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('YOURBOTNAME is online!');
    memberCounter(client);
});
client.on('guildBanRemove', (guild, user) => {
    if (user.bot) return; // Ignore bots
    
    const unbanMessage = 'Welcome back! You have been unbanned from the server.';
  
    user.send(unbanMessage)
      .then(() => {
        console.log(`Sent an unban message to user ${user.tag}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command === 'discorderror') {
        client.commands.get('discorderror').execute(message, args, Discord);
    } else if (command === 'guidelinesandbanappeal') {
        client.commands.get('guidelinesandbanappeal').execute(message, args, Discord);
    } else if (command === 'applications') {
        client.commands.get('applications').execute(message, args, Discord);
    } else if (command === 'test') {
        message.channel.send('test');
    } else if (command === 'socials') {
        client.commands.get('socials').execute(message, args, Discord, client);
    } else if (command === 'tebex') {
        client.commands.get('tebex').execute(message, args, Discord, client);
    } else if (command === 'staffacc') {
        client.commands.get('staffacc').execute(message, args, Discord, client);
    } else if (command === 'staffden') {
        client.commands.get('staffden').execute(message, args, Discord, client);
    } else if (command === 'lspdacc') {
        client.commands.get('lspdacc').execute(message, args, Discord, client);
    } else if (command === 'lspdden') {
        client.commands.get('lspdden').execute(message, args, Discord, client);
    } else if (command === 'sastacc') {
        client.commands.get('sastacc').execute(message, args, Discord, client);
    } else if (command === 'sastden') {
        client.commands.get('sastden').execute(message, args, Discord, client);
    } else if (command === 'bcsoacc') {
        client.commands.get('bcsoacc').execute(message, args, Discord, client);
    } else if (command === 'bcsoden') {
        client.commands.get('bcsoden').execute(message, args, Discord, client);
    } else if (command === 'mediaacc') {
        client.commands.get('mediaacc').execute(message, args, Discord, client);
    } else if (command === 'mediaden') {
        client.commands.get('mediaden').execute(message, args, Discord, client);
    } else if (command === 'cad') {
        client.commands.get('cad').execute(message, args, Discord, client);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord, client);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord, client);
    } else if (command === 'unban') {
        client.commands.get('unban').execute(message, args, Discord, client, prefix);
    } else if (command === 'hub') {
        client.commands.get('hub').execute(message, args, Discord, client, prefix);
    } else if (command === 'dm') {
        const userArg = args.shift();
        let user = message.mentions.users.first() || client.users.cache.get(userArg);
    
        if (!user) {
            return message.reply('You need to provide a user ID or mention a user.');
        }
    
        const content = args.join(' ');
        if (!content) {
            return message.reply('You need to provide a message to send.');
        }
    
        const embed = new Discord.MessageEmbed()
            .setTitle('CHANGEME')
            .setDescription(content)
            .setColor('#002fc0')
            .setFooter(`Sent by ${message.author.tag}`, message.author.displayAvatarURL());
    
        user.send(embed)
            .then(() => {
                if (user.tag === message.author.tag) {
                    message.channel.send(`Sent an embedded DM to yourself.`);
                } else {
                    message.channel.send(`Sent an embedded DM to ${user.tag}.`);
                }
            })
            .catch(() => {
                message.channel.send(`Failed to send an embedded DM to ${user.tag}. Make sure their DMs are open.`);
            });
    }
                });
  

client.login('BotToken');

