let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  let message = '𝐜𝐡𝐚𝐭 𝐬𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐚 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓';
  await conn.sendMessage(m.chat, { 
      text: message,
      contextInfo: {
          forwardingScore: 99,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: '',
              serverMessageId: '',
              newsletterName: ''
          }
      }
  }, { quoted: m });
};

handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat|unbangp$/i;
handler.owner = true;
export default handler;
