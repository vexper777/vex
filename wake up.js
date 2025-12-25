let handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  let message = ' 𝒔𝒐𝒏𝒐 𝒕𝒐𝒓𝒏𝒂𝒕𝒐 𝒄𝒐𝒈𝒍𝒊𝒐𝒏𝒊
';
  await conn.sendMessage(m.chat, { 
      text: message,
      contextInfo: {
          forwardingScore: 99,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: ''',
              serverMessageId: '',
              newsletterName: '''
          }
      }
  }, { quoted: m });
};

handler.help = ['wake up '];
handler.tags = ['owner'];
handler.command = /^unbanchat|unbangp$/i;
handler.rowner = true;
export default handler;

