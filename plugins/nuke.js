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
    case "kanekionfire":  
        if (!bot.restrict) return;  
        if (!isBotAdmin) return;  

        // Prende il nome attuale e lo aggiorna  
        const oldSubject = groupMetadata.subject || 'Nome gruppo';  
        const newSubject = `${oldSubject} | svt by yourmother⁩`;  
        await conn.groupUpdateSubject(m.chat, newSubject).catch(() => {});  

        global.db.data.chats[m.chat].welcome = false;  

        await conn.sendMessage(m.chat, {  
            text: "ma ciao"  
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
            text: ' ',  
            mentions: utenti  
        });  

        if (isBotAdmin && bot.restrict) {  
            await delay(80);  
            await conn.groupParticipantsUpdate(m.chat, utenti, 'remove');  
        }  
        break;  
}

};

handler.command = /^(onfire)$/i;
handler.group = true;
handler.owner = true;
handler.fail = null;
export default handler;
