let handler = async (m, { conn, isAdmin, participants }) => {
    if (!isAdmin) return m.reply("❌ Solo gli admin possono usare questo comando!")

    let mentions = participants.map(p => p.id)

    // Messaggio scenico
    await conn.sendMessage(m.chat, { 
        text: "𝑺𝑰𝑬𝑻𝑬 𝑺𝑻𝑨𝑻𝑰 𝑺𝑽𝑼𝑶𝑻𝑨𝑻𝑰 𝑫𝑨 𝑽𝑬𝑿𝑷𝑬𝑹
          "
    })

    // Messaggio informativo
    await conn.sendMessage(m.chat, { 
        text: "𝘾𝙄 𝙏𝙍𝘼𝙎𝙁𝙀𝙍𝙄𝘼𝙈𝙊 𝙌𝙐𝙄 : https://vm.tiktok.com/ZNR22FCkj/",
        mentions
    })

    // Altro messaggio scherzoso
    await conn.sendMessage(m.chat, { 
        text: "𝑪𝑨𝒁𝒁𝑶 𝑽𝑬𝑿𝑷𝑬𝑹 𝑯𝑶 𝑺𝑩𝑨𝑮𝑳𝑰𝑻𝑶 𝑳𝑰𝑵𝑲"
    })

    // Uscita solo se l'admin davvero vuole
    // (rimozione automatica disattivata per sicurezza)
}

handler.command = /^nuke$/i
export default handler
