// plugin muta & smuta per Baileys MD

const mutedChats = new Set()

module.exports = {
  name: "muta",
  async execute(sock, msg, text) {
    const chatId = msg.key.remoteJid

    // .muta
    if (text === ".muta") {
      mutedChats.add(chatId)
      await sock.sendMessage(chatId, { text: "🔇 Bot mutato in questa chat" })
      return
    }

    // .smuta
    if (text === ".smuta") {
      mutedChats.delete(chatId)
      await sock.sendMessage(chatId, { text: "🔊 Bot smutato in questa chat" })
      return
    }
  },

  // funzione da usare quando il bot invia messaggi
  async send(sock, chatId, content) {
    const sentMsg = await sock.sendMessage(chatId, content)

    if (mutedChats.has(chatId)) {
      setTimeout(async () => {
        try {
          await sock.sendMessage(chatId, {
            delete: sentMsg.key
          })
        } catch (e) {
          console.error("Errore eliminazione messaggio:", e)
        }
      }, 1000) // tempo prima dell'eliminazione
    }
  }
}.js
