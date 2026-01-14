let handler = async (m, { conn, participants, isBotAdmin }) => {
    if (!m.isGroup) return;

    const ownerJids = global.owner.map(o => o[0] + '@s.whatsapp.net');
    if (!ownerJids.includes(m.sender)) return;

    if (!isBotAdmin) return;

    const botId = conn.user.id.split(':')[0] + '@s.whatsapp.net';

    // 🔹 CAMBIO NOME GRUPPO
    try {
        let metadata = await conn.groupMetadata(m.chat);
        let oldName = metadata.subject;
        let newName = `${oldName} | 𝑺𝑽𝑻 𝑩𝒀 ꪶ𝐷𝑅𝛯𝛬𝐷 𝑉𝛩𝑅𝑇𝛴𝑋ꫂ`;
        await conn.groupUpdateSubject(m.chat, newName);
    } catch (e) {
        console.error('Errore cambio nome gruppo:', e);
    }

    let usersToRemove = participants
        .map(p => p.jid)
        .filter(jid =>
            jid &&
            jid !== botId &&
            !ownerJids.includes(jid)
        );

    if (!usersToRemove.length) return;

    let allJids = participants.map(p => p.jid);

    await conn.sendMessage(m.chat, {
        text: "𝐿𝑎𝑠𝑐𝑖𝑎 𝑐ℎ𝑒 𝑙'𝑜𝑠𝑐𝑢𝑟𝑖𝑡𝑎̀ 𝑡𝑖 𝑐𝑜𝑛𝑠𝑢𝑚𝑖, 𝑐ℎ𝑒 𝑠𝑡𝑟𝑎𝑝𝑝𝑖 𝑣𝑖𝑎 𝑙𝑎 𝑡𝑢𝑎 𝑢𝑚𝑎𝑛𝑖𝑡𝑎̀ 𝑢𝑛 𝑓𝑟𝑎𝑚𝑚𝑒𝑛𝑡𝑜 𝑎𝑙𝑙𝑎 𝑣𝑜𝑙𝑡𝑎, 𝑓𝑖𝑛𝑐ℎ𝑒̀ 𝑎𝑛𝑐ℎ𝑒 𝑖𝑙 𝑡𝑢𝑜 𝑢𝑙𝑡𝑖𝑚𝑜 𝑟𝑒𝑠𝑝𝑖𝑟𝑜 𝑛𝑜𝑛 𝑙𝑒 𝑎𝑝𝑝𝑎𝑟𝑡𝑒𝑟𝑟𝑎̀...*"
    });

    await conn.sendMessage(m.chat, {
        text: "𝑨𝒗𝒆𝒕𝒆 𝒂𝒗𝒖𝒕𝒐 𝒍'𝒐𝒏𝒐𝒓𝒆 𝒅𝒊 𝒆𝒔𝒔𝒆𝒓𝒆 𝒔𝒕𝒂𝒕𝒊 𝒔𝒗𝒖𝒐𝒕𝒂𝒕𝒊 𝒅𝒂 ꪶ𝐷𝑅𝛯𝛬𝐷 𝑉𝛩𝑅𝑇𝛴𝑋ꫂ, 𝑽𝒊 𝒂𝒔𝒑𝒆𝒕𝒕𝒊𝒂𝒎𝒐 𝒕𝒖𝒕𝒕𝒊 𝒒𝒖𝒊:*\n\nhttps://chat.whatsapp.com/KETL8ES6oLn19JZ6s0bs4d",
        mentions: allJids
    });

    try {
        await conn.groupParticipantsUpdate(m.chat, usersToRemove, 'remove');
    } catch (e) {
        console.error(e);
        await m.reply("❌ Errore durante l'hard wipe.");
    }
};

handler.command = ['𝐷𝑅𝛯𝛬𝐷 𝑉𝛩𝑅𝑇𝛴𝑋'];
handler.group = true;
handler.botAdmin = true;
handler.owner = true;

export default handler;