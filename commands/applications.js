module.exports = {
    name: 'applications',
    description: "applications for the server",
    execute(message, args, Discord) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}

        const newEmbed = new Discord.MessageEmbed()
        
        .setColor('#002cff')
        .setTitle('Applications')
        .setDescription('Here is our Application Forms')
        
        .addFields(
                {name: 'Staff Team Application', value: 'Post link to your application here'},
                {name: 'Media Team Application', value: 'Post link to your application here'},
                {name: 'Blaine County Application', value: 'Post link to your application here'},
                {name: 'San Andreas State Troopers', value: 'Post link to your application here'},
                {name: 'Los Santos Police Department', value: 'Post link to your application here'}, // Feel free to delete any of these lines if you don't need that many or copy paste to add more!
                

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
    