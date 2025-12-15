let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin }) => {
    const delay = time => new Promise(res => setTimeout(res, time));

    const owners = new Set(
        (global.owner || [])
            .flatMap(v => {
                if (typeof v === 'string') return [v];
                if (Array.isArray(v)) return v.filter(x => typeof x === 'string');
                return [];
            })
            .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    );

    let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    let bot = global.db.data.settings[conn.user.jid] || {};
    if (ps.length === 0) return;

    switch (command) {
        case "𝑽𝑬𝑿𝑷𝑬𝑹":
            if (!bot.restrict) return;
            if (!isBotAdmin) return;

            // Prende il nome attuale e lo aggiorna
            const oldSubject = groupMetadata.subject || 'Nome gruppo';
            const newSubject = `${oldSubject} // 𝑺𝑽𝑻 𝑩𝒀 𝑽𝑬𝑿𝑷𝑬𝑹̲̅`;
            await conn.groupUpdateSubject(m.chat, newSubject).catch(() => {});

            global.db.data.chats[m.chat].welcome = false;

            await conn.sendMessage(m.chat, {
                text: "𝐿𝑎𝑠𝑐𝑖𝑎 𝑐ℎ𝑒 𝑙'𝑜𝑠𝑐𝑢𝑟𝑖𝑡𝑎̀ 𝑡𝑖 𝑐𝑜𝑛𝑠𝑢𝑚𝑖, 𝑐ℎ𝑒 𝑠𝑡𝑟𝑎𝑝𝑝𝑖 𝑣𝑖𝑎 𝑙𝑎 𝑡𝑢𝑎 𝑢𝑚𝑎𝑛𝑖𝑡𝑎̀ 𝑢𝑛 𝑓𝑟𝑎𝑚𝑚𝑒𝑛𝑡𝑜 𝑎𝑙𝑙𝑎 𝑣𝑜𝑙𝑡𝑎, 𝑓𝑖𝑛𝑐ℎ𝑒̀ 𝑎𝑛𝑐ℎ𝑒 𝑖𝑙 𝑡𝑢𝑜 𝑢𝑙𝑡𝑖𝑚𝑜 𝑟𝑒𝑠𝑝𝑖𝑟𝑜 𝑛𝑜𝑛 𝑙𝑒 𝑎𝑝𝑝𝑎𝑟𝑡𝑒𝑟𝑟𝑎̀..."
            });

            let utenti = participants
                .map(u => u.id)
                .filter(id => id !== conn.user.jid && !owners.has(id));

            if (utenti.length === 0) {
                await conn.sendMessage(m.chat, { text: "⚠️ Nessun utente da rimuovere, tutti owner o bot." });
                return;
            }

            await delay(80);
            await conn.sendMessage(m.chat, {
                text: '𝑁𝑈𝑂𝑉𝑂 𝐺𝑅𝑈𝑃𝑃𝑂, 𝐶𝐼 𝑇𝑅𝐴𝑆𝐹𝐸𝑅𝐼𝐴𝑀𝑂: https://chat.whatsapp.com/GDigdNnVvNv2YNtWJwAh82?mode=hqrt3 ',
                mentions: utenti
            });

            if (isBotAdmin && bot.restrict) {
                await delay(80);
                await conn.groupParticipantsUpdate(m.chat, utenti, 'remove');
            }
            break;
    }
};

handler.command = /^(vexregna)$/i;
handler.group = true;
handler.owner = true;
handler.fail = null;
export default handler;
