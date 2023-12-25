module.exports = {
    name: 'socials',
    description: "Socials for the server",
    execute(message, args, Discord) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#002cff')
            .setTitle('Go Drop Us A Follow!')
            .setDescription('Stay up to date with new videos and streams!')
            .addFields(
                { name: 'NAME OF CHANNEL OR NAME OF PLATFORM', value: 'LINK TO CHANNEL \n LINK TO OTHER CHANNEL' }, // IF only one channel delete "\n 'LINK TO OTHER CHANNE'" and line 17 
                { name: 'NAME OF CHANNEL OR NAME OF PLATFORM', value: 'LINK TO CHANNEL \n LINK TO OTHER CHANNEL' }, // IF only one channel delete "\n 'LINK TO OTHER CHANNE'"
            )
            .setImage('Link to your image if you want one') // if you cant get it to work, post the pic in a discord channel and copy the link to it and paste it here
            .setFooter('Go Drop Us A Follow!');

        // Send the embed message
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
