module.exports = {
    name: 'discorderror',
    description: "sends info on how to fix the error",
    execute(message, args, Discord) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#002cff')
        .setTitle('DiscordError')
        .setDescription('If you are getting an error that says you need to be in the discord, please try these steps')
        .addFields(
                {name: '1.', value: 'Restart your PC'},
                {name: '2.', value: 'Open Discord First'},
                {name: '3.', value: 'Open FiveM'},
                {name: '4.', value: 'Log back onto the Server'},

        )
                .setFooter('If you are still getting the error, please create a ticket')
                
                message.channel.send(newEmbed)
                message.channel.send('CHANNELID FOR TICKETS')
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
    