module.exports = {
    name: 'rules',
    description: "sends a message to check out the rules channel",
    execute(message, args, Discord){
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}
        message.channel.send('Check out our rules here! <#CHANNELID>')
        
        .then(() => {
            // Delete the user's command message
            message.delete().catch(error => {
                console.error('Error deleting user message:', error);
            });
        })
        .catch(error => {
            console.error('Error sending message:', error);
        })
}
};



    
