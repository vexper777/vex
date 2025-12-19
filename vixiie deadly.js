class WhatsAppPlugin {
  constructor(options = {}) {
    this.prefix = options.prefix || ".";
  }

  async handleMessage(message, sendMessage) {
    if (!message || !message.text) return;

    const text = message.text.trim();

    if (!text.startsWith(this.prefix)) return;

    const command = text.slice(this.prefix.length).toLowerCase();

    // COMANDO .vixiie deadly
    if (command === "vixiie deadly") {
      await sendMessage(
        message.from,
        "𝑽𝑰𝑿𝑰𝑰𝑬 𝑬 𝑫𝑬𝑨𝑫𝑳𝒀 𝑺𝑶𝑵𝑶 𝑰 𝑴𝑰𝑬𝑰 𝑭𝑹𝑨𝑻𝑬𝑳𝑳𝑰 𝒁𝑶𝒁𝒁𝑨𝑷𝑷𝑨𝑹𝑰, 𝑯𝑶 𝑨𝑽𝑼𝑻𝑶 𝑴𝑶𝑳𝑻𝑬 𝑬𝑺𝑷𝑬𝑹𝑰𝑬𝑵𝒁𝑬 𝑩𝑹𝑼𝑻𝑻𝑬 𝑪𝑶𝑵 𝑳𝑶𝑹𝑶 𝑴𝑨 𝑮𝑳𝑰 𝑽𝑶𝑮𝑳𝑰𝑶 𝑼𝑵 𝑴𝑶𝑵𝑫𝑶 𝑫𝑰 𝑩𝑬𝑵𝑬"
      );
    }
  }
}

module.exports = WhatsAppPlugin;.js
