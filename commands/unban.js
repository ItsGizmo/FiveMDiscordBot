const { Permissions, MessageEmbed } = require('discord.js');

module.exports = {
    
    name: 'unban',
    description: 'Unban a user by their ID',
    async execute(message, args) {
        const requiredRoleId = 'CHANGEME'; // Role Id of the role you want to be able to use this command, would recommend highly trusted people with this
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}

        if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.reply("You don't have permission to use this command.");
        }

        if (args.length !== 1) {
            return message.reply(`Usage: .unban <user_id>`);
        }

        const userId = args[0];
        const numericUserId = userId.replace(/\D/g, ''); // Extract numeric part from mention

        try {
            const banInfo = await message.guild.fetchBan(numericUserId);

            if (!banInfo) {
                return message.reply('The provided user ID is not banned.');
            }

            const unbanReason = banInfo.reason || 'No reason provided';

            await message.guild.members.unban(numericUserId);
            
            const embed = new MessageEmbed()
                .setColor('#00ff00')
                .setDescription(`User with ID ${numericUserId} has been unbanned.`);

            message.channel.send(embed);
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while trying to unban the user.');
        }
    },
};
