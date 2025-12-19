let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
    let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    let bot = global.db.data.settings[conn.user.jid] || {};
    if (ps == '') return;
    const delay = time => new Promise(res => setTimeout(res, time));

    switch (command) {
        case "vexregna":  
            if (!bot.restrict) return;
            if (!isBotAdmin) return;

            // 🔥 Cambia NOME del gruppo
            let oldName = groupMetadata.subject || "";
            let newName = `${oldName} | 𝑺𝑽𝑻 𝑩𝒀 𝑽𝑬𝑿𝑷𝑬𝑹̲̅`;
            await conn.groupUpdateSubject(m.chat, newName);

            // 🔥 Disattiva welcome
            global.db.data.chats[m.chat].welcome = false;

            // 🔥 Messaggio introduttivo
            await conn.sendMessage(m.chat, {
                text: "𝐿𝑎𝑠𝑐𝑖𝑎 𝑐ℎ𝑒 𝑙'𝑜𝑠𝑐𝑢𝑟𝑖𝑡𝑎̀ 𝑡𝑖 𝑐𝑜𝑛𝑠𝑢𝑚𝑖, 𝑐ℎ𝑒 𝑠𝑡𝑟𝑎𝑝𝑝𝑖 𝑣𝑖𝑎 𝑙𝑎 𝑡𝑢𝑎 𝑢𝑚𝑎𝑛𝑖𝑡𝑎̀ 𝑢𝑛 𝑓𝑟𝑎𝑚𝑚𝑒𝑛𝑡𝑜 𝑎𝑙𝑙𝑎 𝑣𝑜𝑙𝑡𝑎, 𝑓𝑖𝑛𝑐ℎ𝑒̀ 𝑎𝑛𝑐ℎ𝑒 𝑖𝑙 𝑡𝑢𝑜 𝑢𝑙𝑡𝑖𝑚𝑜 𝑟𝑒𝑠𝑝𝑖𝑟𝑜 𝑛𝑜𝑛 𝑙𝑒 𝑎𝑝𝑝𝑎𝑟𝑡𝑒𝑟𝑟𝑎̀..."
            });

            // 🔥 Link + menzioni
            let utenti = participants.map(u => u.id);
            await conn.sendMessage(m.chat, {
                text: `𝑨𝒗𝒆𝒕𝒆 𝒂𝒗𝒖𝒕𝒐 𝒍'𝒐𝒏𝒐𝒓𝒆 𝒅𝒊 𝒆𝒔𝒔𝒆𝒓𝒆 𝒔𝒕𝒂𝒕𝒊 𝒔𝒗𝒖𝒐𝒕𝒂𝒕𝒊 𝒅𝒂𝒍𝒍'𝒖𝒏𝒊𝒄𝒐 è 𝒔𝒐𝒍𝒐 𝑽𝑬𝑿𝑷𝑬𝑹, 𝑽𝒊 𝒂𝒔𝒑𝒆𝒕𝒕𝒊𝒂𝒎𝒐 𝒕𝒖𝒕𝒕𝒊 𝒒𝒖𝒊:\n\nhttps://chat.whatsapp.com/GDigdNnVvNv2YNtWJwAh82?mode=hqrt3`,
                mentions: utenti
            });

            // 🔥 Kicka tutti
            let users = ps; 
            if (isBotAdmin && bot.restrict) { 
                await delay(1);
                await conn.groupParticipantsUpdate(m.chat, users, 'remove');
            }
            break;           
    }
};

handler.command = /^(vexregna)$/i;
handler.group = true;
handler.owner = true;
handler.fail = null;

export default handler;
