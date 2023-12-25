module.exports = {
    name: 'kick',
    description: 'Kick a user from the server, this will send a dm to the user before being kicked with the reason for the kick if provided ".kick (user) for breaking rules',
    execute(message, args) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}

        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply("You don't have the permission to use this command.");
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('You need to mention the user to kick.');
        }

        const member = message.guild.members.cache.get(user.id);
        if (!member) {
            return message.reply('That user is not a member of this server.');
        }

        let reason = args.slice(1).join(' ');
        if (!reason) {
            reason = 'No reason provided';
        }

        member
            .send(`You have been kicked from the server. Reason: ${reason}`)
            .catch(error => {
                console.error(`Failed to send DM to ${user.tag}: ${error}`);
            });

        member
            .kick()
            .then(() => {
                message.reply(`Successfully kicked ${user.tag}.`);
            })
            .catch(error => {
                console.error(error);
                message.reply('An error occurred while trying to kick the user.');
            });
    },
};
