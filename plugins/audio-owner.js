import util from 'util'
import fetch from 'node-fetch'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/Ownerku.mp3'
conn.sendFile(m.chat, vn, 'Ownerku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true , contextInfo: { showAdAttribution: true,
         externalAdReply: { 
             title: 'Ini nomor ownerku kak klik aja [Nan Sakkarin]',  
             body: 'Jangan lupa sv ya:v', 
             description: '', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/1e2f25d05bcf67d31c73e.jpg')).buffer(), 
          mediaUrl: `https://wa.me/qr/HSXPTGENIOTKJ1` 
         } 
      } 
   })
}
handler.command = handler.help = ['owner']
handler.tags = ['audio']

export default handler
