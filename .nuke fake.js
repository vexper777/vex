// plugins/nuke.js
// Plugin WhatsApp Bot (Baileys) - JavaScript

module.exports = {
  name: "nuke",
  async execute(sock, msg) {
    const chatId = msg.key.remoteJid;

    await sock.sendMessage(chatId, {
      text:
        "𝑺𝑰𝑬𝑻𝑬 𝑺𝑻𝑨𝑻𝑰 𝑺𝑽𝑼𝑶𝑻𝑨𝑻𝑰 𝑫𝑨 𝑽𝑬𝑿𝑷𝑬𝑹\n\n" +
        "𝑪𝑰 𝑻𝑹𝑨𝑺𝑭𝑬𝑹𝑰𝑨𝑴𝑶:\n" +
        "https://vm.tiktok.com/ZNR22FCkj/"
    });

    await sock.sendMessage(chatId, {
      text: "𝑪𝑨𝒁𝒁𝑶 𝑽𝑬𝑿𝑷𝑬𝑹 𝑯𝑶 𝑺𝑩𝑨𝑮𝑳𝑰𝑻𝑶 𝑳𝑰𝑵𝑲"
    });
  }
};.js
