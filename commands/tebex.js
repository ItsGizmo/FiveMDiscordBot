module.exports = {
    name: 'tebex',
    description: "Tebex Store",
    execute(message, args, Discord) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#002cff')
        .setTitle('Tebex')
        .setDescription('This is our Tebex Store')
        
        .addFields(
                {name: 'Tebex:', value: 'LINK TO TEBEX'},
               
                

        )     
                .setImage('Link to your image if you want one') // if you cant get it to work, post the pic in a discord channel and copy the link to it and paste it here
                .setFooter('If you have any questions please feel free to ask in a ticket!');
                
                message.channel.send(newEmbed)
                .then(() => {
                    // Delete the user's command message
                    message.delete().catch(error => {
                        console.error('Error deleting user message:', error);
                    });
                })
                .catch(error => {
                    console.error('Error sending message:', error);
                });
        }
    };
    