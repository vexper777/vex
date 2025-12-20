// muta.js

const mutedUsers = {}

export async function muta(m, { conn, participants, isAdmin, isBotAdmin }) {
    if (!m.isGroup) 
        return m.reply('❌ Questo comando funziona solo nei gruppi')

    if (!isAdmin) 
        return m.reply('❌ Solo gli admin possono usare questo comando')

    if (!isBotAdmin) 
        return m.reply('❌ Devo essere admin per eliminare messaggi')

    const user = m.mentionedJid[0]
    if (!user) 
        return m.reply('⚠️ Menziona la persona da mutare')

    const groupId = m.chat

    if (!mutedUsers[groupId]) mutedUsers[groupId] = []

    if (mutedUsers[groupId].includes(user)) {
        return m.reply('⚠️ Questo utente è già mutato')
    }

    mutedUsers[groupId].push(user)

    m.reply(`🔇 Utente mutato con successo`)
}

export { mutedUsers }
