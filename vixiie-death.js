/**
 * Plugin: Vixiie & Deadly
 * Comandi: .vixiie | .deadly
 * Tipo: WhatsApp Bot MD (Baileys)
 * Autore: tuo_nome
 */

module.exports = {
  name: "vixiie-deadly",
  command: ["vixiie", "deadly"],
  category: "fun",
  description: "Risposta dedicata a Vixiie e Deadly",

  async execute(sock, m) {
    const risposta =
      "𝑽𝑰𝑿𝑰𝑰𝑬 𝑬 𝑫𝑬𝑨𝑫𝑳𝒀 𝑺𝑶𝑵𝑶 𝑰 𝑴𝑰𝑬𝑰 𝑭𝑹𝑨𝑻𝑬𝑳𝑳𝑰 𝒁𝑶𝒁𝒁𝑨𝑷𝑷𝑨𝑹𝑰, 𝑯𝑶 𝑨𝑽𝑼𝑻𝑶 𝑴𝑶𝑳𝑻𝑬 𝑬𝑺𝑷𝑬𝑹𝑰𝑬𝑵𝒁𝑬 𝑩𝑹𝑼𝑻𝑻𝑬 𝑪𝑶𝑵 𝑳𝑶𝑹𝑶 𝑴𝑨 𝑮𝑳𝑰 𝑽𝑶𝑮𝑳𝑰𝑶 𝑼𝑵 𝑴𝑶𝑵𝑫𝑶 𝑫𝑰 𝑩𝑬𝑵𝑬";

    await sock.sendMessage(
      m.chat,
      { text: risposta },
      { quoted: m }
    );
  }
};.js
