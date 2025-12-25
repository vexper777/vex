let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  let message = '𝐜𝐡𝐚𝐭 𝐬𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐚 𝐜𝐨𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐨 ✓';
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
handler.command = /^unbanchat|unbangp$/i;
handler.rowner = true;
export default handler;let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  let message = '𝒔𝒐𝒏𝒐 𝒕𝒐𝒓𝒏𝒂𝒕𝒐 𝒄𝒐𝒈𝒍𝒊𝒐𝒏𝒊
';
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
