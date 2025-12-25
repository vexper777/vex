let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('𝒗𝒆𝒅𝒐 𝒐𝒇𝒇 𝒄𝒐𝒔𝒊 𝒏𝒐𝒏 𝒎𝒊 𝒓𝒐𝒎𝒑𝒆𝒕𝒆 𝒊 𝒄𝒐𝒈𝒍𝒊𝒐𝒏𝒊')
}
handler.help = ['silent']
handler.tags = ['owner']
handler.command = /^banchat|bangp$/i
handler.rowner = true
export default handler
