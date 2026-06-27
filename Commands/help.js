const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭══〘〘 *𝑹𝑨𝑯𝑰_𝑴𝑫* 〙〙══⊷
┃❍ *Owner:* ${settings.botOwner}
┃❍ *Speed:* ${ping} ms
┃❍ *Uptime:* ${uptimeFormatted}
┃❍ *Date:* ${new Date().toLocaleString()}
┃❍ *Telegram Link:* t.me/Rahi_106
┃❍ *Version:* ${settings.version} 
┃❍ *Rank:* *S Rank Hunter*
╰══════════════════⊷‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭━━❮ *OWNER* ❯━⊷
╏ ➜ .welcome
╏ ➜ .goodbye
╏ ➜ .ban 
╏ ➜ .unban
╏ ➜ .warnings 
╏ ➜ .warn 
╏ ➜ .tag
╏ ➜ .tagall
╏ ➜ .chatbot
╏ ➜ .resetlink
╏ ➜ .antibadword
╏ ➜ .delete
╏ ➜ .kick
╏ ➜ .mute
╏ ➜ .unmute
╏ ➜ .promote
╏ ➜ .demote
╏ ➜ .clear
╏ ➜ .add
╰━━━━━━━━━━━⊷
╭━━❮ *GENERAL* ❯━⊷
╏ ➜ .jid
╏ ➜ .vv
╏ ➜ .news
╏ ➜ .ping
╏ ➜ .groupinfo
╏ ➜ .weather
╏ ➜ .quote
╏ ➜ .ss
╏ ➜ .tts
╏ ➜ .owner
╏ ➜ .fact
╏ ➜ .attp
╏ ➜ .joke
╏ ➜ .8ball
╏ ➜ .alive
╏ ➜ .lyrics
╏ ➜ .menu
╏ ➜ .admins
╏ ➜ .trt
╰━━━━━━━━━━━⊷
╭━━❮ *SETTINGS* ❯━⊷  
╏ ➜ .autostatus  
╏ ➜ .autoread  
╏ ➜ .cleartmp  
╏ ➜ .mode public  
╏ ➜ .mode private  
╏ ➜ .autobio  
╏ ➜ .autoreact  
╏ ➜ .antidelete  
╏ ➜ .getpp  
╏ ➜ .setpp  
╏ ➜ .autotyping  
╏ ➜ .autorecording  
╏ ➜ .clearsession  
╰━━━━━━━━━⊷
╭━━❮ *STICKER* ❯━⊷  
╏ ➜ .meme  
╏ ➜ .take  
╏ ➜ .sticker  
╏ ➜ .blur  
╏ ➜ .emojimix  
╏ ➜ .tgsticker  
╏ ➜ .simage  
╰━━━━━━━━━━⊷

╭━━❮ *GAME* ❯━⊷  
╏ ➜ .guess  
╏ ➜ .truth  
╏ ➜ .trivia  
╏ ➜ .hangman  
╏ ➜ .answer  
╏ ➜ .tictactoe  
╏ ➜ .dare  
╰━━━━━━━━━━━⊷

╭━━❮ *AI* ❯━⊷  
╏ ➜ .flux  
╏ ➜ .gptgo  
╏ ➜ .imagine  
╏ ➜ .gpt  
╏ ➜ .gemini  
╰━━━━━━━━━━⊷

╭━━❮ *FUN* ❯━⊷  
╏ ➜ .compliment  
╏ ➜ .simp  
╏ ➜ .ship  
╏ ➜ .wasted  
╏ ➜ .flirt  
╏ ➜ .shayari  
╏ ➜ .goodnight  
╏ ➜ .character  
╏ ➜ .insult  
╏ ➜ .roseday  
╏ ➜ .stupid  
╰━━━━━━━━━━⊷
╭━━❮ *MAKER* ❯━⊷  
╏ ➜ .devil  
╏ ➜ .ice  
╏ ➜ .neon  
╏ ➜ .snow  
╏ ➜ .metallic  
╏ ➜ .purple  
╏ ➜ .glitch  
╏ ➜ .fire  
╏ ➜ .light  
╏ ➜ .arena  
╏ ➜ .sand  
╏ ➜ .matrix  
╏ ➜ .blackpink  
╏ ➜ .1917  
╏ ➜ .impressive  
╏ ➜ .hacker  
╏ ➜ .thunder  
╏ ➜ .leaves  
╰━━━━━━━━━━━⊷
 
╭━━❮ *SEARCH* ❯━⊷  
╏ ➜ .instagram  
╏ ➜ .ytmp4  
╏ ➜ .play  
╏ ➜ .video  
╏ ➜ .facebook  
╏ ➜ .song  
╏ ➜ .tiktok  
╰━━━━━━━━━━━⊷

╭━━❮ *GITHUB* ❯━⊷  
╏ ➜ .gitclone  
╏ ➜ .script  
╏ ➜ .sc  
╏ ➜ .repo  
╏ ➜ .git  
╏ ➜ .github  
╰━━━━━━━━━━━━⊷
> *Powered By 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐑𝐚𝐡𝐢 𓃴*`;
Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'KnightBot MD by Mr Unique Hacker',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
