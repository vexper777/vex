import { performance } from 'perf_hooks';
import fetch from 'node-fetch'; // Assicurati di avere node-fetch installato
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command }) => {
  const userCount = Object.keys(global.db.data.users).length;
  const botName = global.db.data.nomedelbot || '𝖛𝖊𝖝-𝖇𝖔𝖙';

  if (command === 'menu') {
    return await (await import('./menu-principale.js')).default(message, { conn, usedPrefix });
  }
  if (command === 'menuadmin') {
    return await (await import('./menu-admin.js')).default(message, { conn, usedPrefix });
  }
  if (command === 'menusicurezza') {
    return await (await import('./menu-sicurezza.js')).default(message, { conn, usedPrefix });
  }
  if (command === 'menugruppo') {
    return await (await import('./menu-gruppo.js')).default(message, { conn, usedPrefix });
  }

  const menuText = generateMenuText(usedPrefix, botName, userCount);

  const videoPath = path.join(__dirname, '../menu/edit3.mp4');
  await conn.sendMessage(message.chat, {
    video: { url: videoPath },
    caption: menuText,
    footer: 'Scegli un menu:',
    buttons: [
      { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 Menu Principale' }, type: 1 },
      { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: '🛡️ Menu Admin' }, type: 1 },
      { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 Menu Sicurezza' }, type: 1 },
      { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 Menu Gruppo' }, type: 1 },
      { buttonId: `${usedPrefix}menuia`, buttonText: { displayText: '🤖 Menu IA' }, type: 1 },
    ],
    viewOnce: true,
    headerType: 4,
  });
};

handler.help = ['menuowner', 'menu', 'menuadmin', 'menusicurezza', 'menugruppo'];
handler.tags = ['menu'];
handler.command = /^(menuowner|menu|menuadmin|menusicurezza|menugruppo)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount) {
  return `
╭━〔 *🌑 𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥 - ${botName}* 〕━┈⊷
┃◈╭────────────────────·
┃◈┃ 🔐 *𝗖𝗢𝗠𝗔𝗡𝗗𝗜 𝗢𝗪𝗡𝗘𝗥*
┃◈┃
┃◈┃ ⚙️ *${prefix}impostanome*
┃◈┃ ♻️ *${prefix}resetnome*
┃◈┃ 👑 *${prefix}gestisci* @
┃◈┃ 🗂️ *${prefix}setgruppi*
┃◈┃ ➕ *${prefix}aggiungigruppi* @
┃◈┃ 🔁 *${prefix}resetgruppi* @
┃◈┃ 🖼️ *${prefix}setpp* (immagine)
┃◈┃ 🚫 *${prefix}banuser* @
┃◈┃ ✅ *${prefix}unbanuser* @
┃◈┃ 🔒 *${prefix}blockuser* @
┃◈┃ 🔓 *${prefix}unblockuser* @
┃◈┃ 🧹 *${prefix}pulizia* (+)
┃◈┃ 📁 *${prefix}getfile*
┃◈┃ 💾 *${prefix}salva* (plugin)
┃◈┃ 🧩 *${prefix}dp* (plugin)
┃◈┃ 📦 *${prefix}getplugin*
┃◈┃ 🔗 *${prefix}join* + link
┃◈┃ 🚪 *${prefix}out*
┃◈┃ ❓ *${prefix}prefisso* (?)
┃◈┃ ♻️ *${prefix}resetprefisso*
┃◈┃ 👑 *${prefix}godmode*
┃◈┃ 🧮 *${prefix}azzera* @
┃◈┃ ➕ *${prefix}aggiungi* (num) @
┃◈┃ ➖ *${prefix}rimuovi* (num) @
┃◈┃ 📣 *${prefix}everygroup* (comando)
┃◈┃ 🔇 *${prefix}banchat* (gruppo)
┃◈┃ 🔊 *${prefix}unbanchat* (gruppo)
┃◈┃ 🔄 *${prefix}riavvia*
┃◈┃ ⛔ *${prefix}spegnibot*
┃◈┃ ⬆️ *${prefix}aggiornabot*
┃◈┃
┃◈└────────────────────⊷
┃◈┃ 👤 *Utenti:* ${userCount}
╰━━━━━━━━━━━━━━━━━━━━━━━·
`.trim();
}
