case '.smuta': {
    if (!isGroup) return reply('❌ Comando solo per gruppi')

    let target

    // Risposta a un messaggio
    if (m.quoted) {
        target = m.quoted.sender
    }
    // Menzione @user
    else if (m.mentionedJid?.length) {
        target = m.mentionedJid[0]
    } 
    else {
        return reply('❌ Usa: .smuta @user oppure rispondi al messaggio')
    }

    if (!mutedUsers.has(target)) {
        return reply('ℹ️ Questo utente non è mutato')
    }

    mutedUsers.delete(target)

    reply('✅ Utente smutato correttamente')
}
break
