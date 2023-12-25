const { Permissions, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Ban a user from the server',
    execute(message, args) {
        const requiredRoleId = 'CHANGEME';//Role ID for people to use this command, recommend only people you highly trust with this 
const hasRequiredRole = message.member.roles.cache.some(role => role.id === requiredRoleId);

if (!hasRequiredRole) {
    return message.reply("You don't have permission to use this command.");
}
        if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            return message.reply("You don't have the permission to use this command.");
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('You need to mention the user to ban.');
        }

        const member = message.guild.members.cache.get(user.id);
        if (!member) {
            return message.reply('That user is not a member of this server.');
        }

        let reason = args.slice(1).join(' ');
        if (!reason) {
            reason = 'No reason provided';
        }

        // Create an embed for the ban message
        const banEmbed = new MessageEmbed()
            .setTitle('Ban Notification')
            .setColor('#ff0000')
            .setDescription(`You have been banned from the server.\nReason: ${reason}`)
            .setFooter('If you believe this is a mistake, you can contact the server admin.');

        // Send the embed as a DM to the user
        user.send(banEmbed)
            .then(() => {
                member
                    .ban({ reason: reason })
                    .then(() => {
                        message.reply(`Successfully banned ${user.tag}.`);
                    })
                    .catch(error => {
                        console.error(error);
                        message.reply('An error occurred while trying to ban the user.');
                    });
            })
            .catch(error => {
                console.error(`Failed to send DM to ${user.tag}: ${error}`);
                message.reply(`Failed to send DM to ${user.tag}. Banning the user...`);
                
                member
                    .ban({ reason: reason })
                    .then(() => {
                        message.reply(`Successfully banned ${user.tag}.`);
                    })
                    .catch(error => {
                        console.error(error);
                        message.reply('An error occurred while trying to ban the user.');
                    });
            });
    },
};
