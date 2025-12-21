import { performance } from 'perf_hooks';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const handler = async (message, { conn, usedPrefix, command }) => {
    const userCount = Object.keys(global.db.data.users).length;


    const menuText = generateDarkMenuText(usedPrefix, userCount);


    const videoPath = path.join(__dirname, '../menu/edit1.mp4'); 


    await conn.sendMessage(
        message.chat,
        {
            video: { url: videoPath },
            caption: menuText,
            footer: '𝘚𝘤𝘦𝘨𝘭𝘪 𝘶𝘯 𝘮𝘦𝘯𝘶...',
            buttons: [
                { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: "🛡️ Menu Admin" }, type: 1 },
                { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: "👑 Menu Owner" }, type: 1 },
                { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: "🚨 Menu Sicurezza" }, type: 1 },
                { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: "👥 Menu Gruppo" }, type: 1 },
                { buttonId: `${usedPrefix}menuia`, buttonText: { displayText: "🤖 Menu IA" }, type: 1 }
            ],
            viewOnce: true,
            headerType: 4
        }
    );
};


handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;


export default handler;


function generateDarkMenuText(prefix, userCount) {
    const version = 'v7.0-dark';
    return `
╔═『 𝖛𝖊𝖝-𝖇𝖔𝖙 』═╗


  𝔐𝔢𝔫𝔲 𝔡𝔢𝔦 ℭ𝔬𝔪𝔞𝔫𝔡𝔦 


⚔️ ${prefix}staff
🕯️ ${prefix}egemonia
📜 ${prefix}candidati
🕷️ ${prefix}installa
📖 ${prefix}guida
⚙️ ${prefix}sistema
❓ ${prefix}faq
🚀 ${prefix}ping
📝 ${prefix}segnala <comando>
💡 ${prefix}consiglia <comando>


╠═══[ ℹ️ 𝘋𝘈𝘛𝘐 ]═══╣
• 𝘝𝘦𝘳𝘴𝘪𝘰𝘯𝘦: ${version}
• 𝘜𝘵𝘦𝘯𝘵𝘪: ${userCount}
╚═══════════════════╝
`.trim();
}




