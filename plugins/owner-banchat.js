let handler = async (m, { conn, isOwner, command }) => {
    try {
        /* ───── CONTROLLI BASE ───── */
        if (!isOwner) {
            return m.reply(
`🚫 *ACCESSO NEGATO*
━━━━━━━━━━━━━━━━━━

⚠️ *Permessi insufficienti*
└─ Questo comando è riservato al proprietario.

ℹ️ Se ritieni sia un errore, contatta l’amministratore.`
            )
        }

        if (!m.isGroup) {
            return m.reply(
`🚫 *COMANDO NON DISPONIBILE*
━━━━━━━━━━━━━━━━━━

⚠️ *Ambiente non valido*
└─ Questo comando può essere usato solo nei gruppi.`
            )
        }

        /* ───── INIZIALIZZAZIONE DB ───── */
        if (!global.db.data) global.db.data = { chats: {} }

        if (!global.db.data.chats[m.chat]) {
            global.db.data.chats[m.chat] = {
                banned: false,
                welcome: false,
                detect: false,
                antiLink: false,
                antiToxic: false,
                expired: 0
            }
        }

        let chat = global.db.data.chats[m.chat]

        /* ───── BAN CHAT ───── */
        if (command === 'banchat') {
            if (chat.banned) {
                return m.reply(
`⚠️ *AZIONE NON NECESSARIA*
━━━━━━━━━━━━━━━━━━

ℹ️ Questo gruppo risulta già bannato.`
                )
            }

            chat.banned = true

            let meta = await conn.groupMetadata(m.chat)
            let members = meta.participants.length
            let admins = meta.participants.filter(p => p.admin)

            await m.reply(
`🔒 *GRUPPO BANNATO*
━━━━━━━━━━━━━━━━━━

🏷️ *Gruppo:* ${meta.subject}
👥 *Membri:* ${members}
👑 *Admin:* ${admins.length}
📅 *Data:* ${new Date().toLocaleString('it-IT')}

🚫 *Effetti del ban*
┌─ Il bot ignorerà i comandi
├─ Solo il proprietario può intervenire
└─ Il ban resta attivo fino a revoca`
            )

            let adminNotice =
`⚠️ *NOTIFICA DI SISTEMA*
━━━━━━━━━━━━━━━━━━

Questo gruppo è stato **bannato**.

🚫 Il bot non risponderà ai comandi
ℹ️ Solo il proprietario può rimuovere il blocco`

            for (let admin of admins) {
                await conn.sendMessage(admin.id, { text: adminNotice })
            }
        }

        /* ───── UNBAN CHAT ───── */
        if (['unbanchat', 'sbanchat', 'sbannachat'].includes(command)) {
            if (!chat.banned) {
                return m.reply(
`ℹ️ *NESSUN BLOCCO ATTIVO*
━━━━━━━━━━━━━━━━━━

Questo gruppo non risulta bannato.`
                )
            }

            chat.banned = false

            await m.reply(
`✅ *GRUPPO SBANNATO*
━━━━━━━━━━━━━━━━━━

🔓 Il blocco è stato rimosso con successo.
🤖 Il bot è nuovamente operativo in questo gruppo.`
            )
        }

    } catch (e) {
        console.error(e)
        return m.reply(
`❌ *ERRORE DI SISTEMA*
━━━━━━━━━━━━━━━━━━

⚠️ Si è verificato un problema imprevisto.
📝 *Dettagli:* ${e.message}`
        )
    }
}

/* ───── CONFIG ───── */
handler.help = ['banchat', 'unbanchat']
handler.tags = ['creatore']
handler.command = /^(banchat|unbanchat|sbanchat|sbannachat)$/i
handler.owner = true
handler.group = true

export default handler