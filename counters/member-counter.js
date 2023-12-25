module.exports = async (client) => {
    const guild = client.guilds.cache.get('GUILDID');

    if (!guild) {
        console.error('Guild not found!');
        return;
    }

    const channel = guild.channels.cache.get('VOICECHANNELID');

    if (!channel) {
        console.error('Channel not found!');
        return;
    }

    setInterval(() => {
        const memberCount = guild.memberCount;
        channel.setName(`😎 Members: ${memberCount.toLocaleString()}`); //feel free to paste a different emoji using "https://emojipedia.org"  😎
        console.log('Updating Member Count');
    }, 60000);
};
