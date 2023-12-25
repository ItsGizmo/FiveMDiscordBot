module.exports = {
    name: 'guidelinesandbanappeal',
    description: "guidelines of the server",
    execute(message, args, Discord) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#002cff')
        .setTitle('Community Guidelines and Ban Appeal')
        .setDescription('Here is our Community Guidelines and Ban Appeal Form')
        .addFields(
                {name: 'Community Guidelines', value: 'LINK TO YOUR GUIDELINES'},
                {name: 'Ban Appeal', value: 'LINK TO YOUR BAN APPEAL'}, //delete line if not needed here
                

        )       .setImage('Link to your image if you want one') // if you cant get it to work, post the pic in a discord channel and copy the link to it and paste it here
                .setFooter('Guidelines are subject to change without warning so please keep yourself updated!');
                
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
    