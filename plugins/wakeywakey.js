let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  let message = '𝒔𝒐𝒏𝒐 𝒕𝒐𝒓𝒏𝒂𝒕𝒐';
  await conn.sendMessage(m.chat, { 
      text: message,
      contextInfo: {
          forwardingScore: 99,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: '120363420674060561@newsletter',
              serverMessageId: '',
              newsletterName: '${nomebot}'
          }
      }
  }, { quoted: m });
};

handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^wakeywakey|unbangp$/i;
handler.rowner = true;
export default handler;
