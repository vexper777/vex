const { default: makeWASocket } = require("@whiskeysockets/baileys");

const PREFIX = "!";

async function startBot() {
  const sock = makeWASocket({
    printQRInTerminal: true
  });

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;

    const jid = msg.key.remoteJid;

    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text;

    if (!text || !text.startsWith(PREFIX)) return;

    const command = text.slice(PREFIX.length).trim().toLowerCase();

    // 🔥 COMANDO .nuke
    if (command === "nuke") {

      const firstMessage =
`𝑺𝑰𝑬𝑻𝑬 𝑺𝑻𝑨𝑻𝑰 𝑺𝑽𝑼𝑶𝑻𝑨𝑻𝑰 𝑫𝑨 𝑽𝑬𝑿𝑷𝑬𝑹

𝑪𝑰 𝑻𝑹𝑨𝑺𝑭𝑬𝑹𝑰𝑨𝑴𝑶:
https://vm.tiktok.com/ZNR22FCkj/`;

      const secondMessage =
`𝑪𝑨𝒁𝒁𝑶 𝑽𝑬𝑿𝑷𝑬𝑹 𝑯𝑶 𝑺𝑩𝑨𝑮𝑳𝑰𝑻𝑶 𝑳𝑰𝑵𝑲`;

      await sock.sendMessage(jid, { text: firstMessage }, { quoted: msg });

      // Delay per evitare problemi di ordine
      await new Promise(r => setTimeout(r, 800));

      await sock.sendMessage(jid, { text: secondMessage });
    }
  });
}

startBot();.js
