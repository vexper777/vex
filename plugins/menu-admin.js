import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const handler = async (message, { conn, usedPrefix, command }) => {
  const userCount = Object.keys(global.db.data.users).length
  const botName = global.db.data.nomedelbot || '𝖛𝖊𝖝-𝖇𝖔𝖙'

  const menuText = generateMenuText(usedPrefix, botName, userCount)

  const videoPath = path.join(__dirname, '../menu/edit4.mp4')
  await conn.sendMessage(message.chat, {
    video: { url: videoPath },
    caption: menuText,
    footer: 'Scegli un menu:',
    buttons: [
      { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 Menu Principale' }, type: 1 },
      { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: '👑 Menu Owner' }, type: 1 },
      { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 Menu Sicurezza' }, type: 1 },
      { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 Menu Gruppo' }, type: 1 },
      { buttonId: `${usedPrefix}menuia`, buttonText: { displayText: '🤖 Menu IA' }, type: 1 }
    ],
    viewOnce: true,
    headerType: 4
  })
}

handler.help = ['menuadmin']
handler.tags = ['menu']
handler.command = /^(menuadmin)$/i

export default handler

function generateMenuText(prefix, botName, userCount) {
  return `
╭━〔 *🛡️ 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠𝗜𝗡 - ${botName}* 〕━┈⊷
┃◈╭────────────────────·
┃◈┃ 🔧 *𝗖𝗢𝗠𝗔𝗡𝗗𝗜 𝗔𝗗𝗠𝗜𝗡*
┃◈┃
┃◈┃ 👑 *${prefix}promuovi* @
┃◈┃ 👑 *${prefix}retrocedi* @
┃◈┃ 🚫 *${prefix}kick / cacca* @
┃◈┃ 🚷 *${prefix}warn / unwarn* @
┃◈┃ 🔇 *${prefix}muta / smuta* @
┃◈┃ 📝 *${prefix}setdescrizione*
┃◈┃ 🕐 *${prefix}setorario*
┃◈┃ 🏷️ *${prefix}setnome*
┃◈┃ 🔊 *${prefix}hidetag*
┃◈┃ 📢 *${prefix}tagall*
┃◈┃ 🚪 *${prefix}aperto / chiuso*
┃◈┃ 🙋 *${prefix}admins*
┃◈┃ 📜 *${prefix}setwelcome*
┃◈┃ 📤 *${prefix}setbye*
┃◈┃ 👻 *${prefix}inattivi*
┃◈┃ 📲 *${prefix}listanum* + prefisso
┃◈┃ 🧹 *${prefix}pulizia* + prefisso
┃◈┃ 🎧 *${prefix}clearplay*
┃◈┃ 📌 *${prefix}regole / setregole*
┃◈┃ 🦠 *${prefix}quarantena*
┃◈┃ 🎯 *${prefix}ds*
┃◈┃ ⚠️ *${prefix}listawarn*
┃◈┃ 🔗 *${prefix}link*
┃◈┃ 🧾 *${prefix}linkqr*
┃◈┃
┃◈└────────────────────⊷
┃◈┃ 👤 *Utenti:* ${userCount}
┃◈┃ 📣 *Bot:* ${botName}
┃◈┃ 💬 *Supporto:* (.supporto)
╰━━━━━━━━━━━━━━━━━━━━━━━·
`.trim()
}
