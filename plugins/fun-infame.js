const handler = async (msg, { client, conn }) => {
    const percent = Math.floor(Math.random() * 101);
    
    if (!conn?.sendMessage) throw new Error("Bro, manca il conn 😒");

    // Frasi da social media (no cringe boomer) 🔥
    const savageReactions = [
        `🧢 *"Nah, sei pulito"* (ma sotto il ${percent}% sei un po' sospetto...)`,  
        `👀 *"Fra, ma sei la pecora nera della chat?"*`,  
        `💀 *"Sei il motivo per cui le nonne nascondono il portafoglio"*`,  
        `🤡 *"Se l'infamia fosse un TikTok, saresti virale"*`,  
        `🚓 *"Polizia locale? No, DITTATORIALE con sto livello"*`,  
        `🤑 *"Se rubassi come infami, saresti Jeff Bezos"*`,  
        `📸 *"Sei lo screenshot che non dovevi fare"*`,  
        `🔥 *"Hai più scheletri nell'armadio che followers"*`
    ];
    
    const randomSavage = savageReactions[Math.floor(Math.random() * savageReactions.length)];
    
    let response = `📊 *TEST INFAME-Z* 📊\n\n` +
                  `👤 *Il tuo livello di infame:* **${percent}%**\n` +
                  `${percent > 80 ? "🚨 *SEI L'ADMIN DEGLI SBIRRI!* 🚨" : percent > 50 ? "😎 *Sei nella zona pericolosa...*" : "🧼 *Pulito... forse.*"}\n\n` +
                  `${randomSavage}`;

    await conn.sendMessage(
        msg.chat, 
        { 
            text: response,
            mentions: [msg.sender],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: "⚠️ Sei stato GIOBATO ⚠️",
                    body: "Risultati ufficiali (e inappellabili)",
                    thumbnail: Buffer.alloc(0) // Puoi aggiungere un'immagine qui
                }
            }
        }, 
        { quoted: msg }
    );
};

handler.command = ['npm👍🏻', 'quantosbirro', 'sbirrocheck'];
handler.tags = ['social'];
handler.help = ['infame @user', 'quantosbirro (scopri quanto sei infame)'];
export default handler;