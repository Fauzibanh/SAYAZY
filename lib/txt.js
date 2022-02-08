exports.menu = (m, body, pushname) => {
  return `
*Hi ${pushname}*
_🇮🇩 BERIKUT FITUR REALZI BOT_
_🇯🇵 リアルボットの以下の機能_
*NOTE: GUNAKAN BOT DENGAN BIJAK!!*

❏  PREFIX BOT (#)
❏ *Anonymous*
• ${prefix}start
• ${prefix}next
• ${prefix}stop

❏ *Random Image*
• ${prefix}loli
• ${prefix}milf
• ${prefix}neko
• ${prefix}waifu
• ${prefix}husbu
• ${prefix}shinobu
• ${prefix}megumin

❏ *Converter*
• ${prefix}toimg <reply>
• ${prefix}tovideo <reply>
• ${prefix}tourl <caption / reply>
• ${prefix}tomp3 <caption / reply>
• ${prefix}sticker <caption / reply> [-crop]

❏ *Downloader*
• ${prefix}ytv <url>
• ${prefix}yta <url>
• ${prefix}fbdl <url>
• ${prefix}pixiv <id>
• ${prefix}igdl <url>
• ${prefix}pindl <url>
• ${prefix}twitter <url>
• ${prefix}tiktokdl <url>
• ${prefix}mediafire <url>
• ${prefix}anonfiles <url>
• ${prefix}sfilemobi <url>
• ${prefix}zippyshare <url>

❏ *Searching*
• ${prefix}domain <query>
• ${prefix}google <query>
• ${prefix}gimage <query>
• ${prefix}sfilemobi <query>
• ${prefix}ytsearch <query>
• ${prefix}wikipedia <query>
• ${prefix}konachan <query>
• ${prefix}pinterest <query>
• ${prefix}stickerpack <query>
• ${prefix}happymod <query>
• ${prefix}stickerline <query>
• ${prefix}stelesearch <query>
• ${prefix}alphacoders <query>
• ${prefix}wallpapercave <query>

❏ *Group*
• ${prefix}linkgc
• ${prefix}tagall [teks]
• ${prefix}hidetag [teks]
• ${prefix}promote <@tag / reply>
• ${prefix}demote <@tag / reply>
• ${prefix}setppgc <caption / reply>

❏ *Fun*
• ${prefix}bonk <@tag / reply>
• ${prefix}ship <@tag / reply>
• ${prefix}gay <@tag / reply>
• ${prefix}kiss <@tag / reply>
• ${prefix}bully <@tag / reply>
• ${prefix}cry <@tag / reply>
• ${prefix}hug <@tag / reply>
• ${prefix}lick <@tag / reply>
• ${prefix}slap <@tag / reply>

❏ *Maker*
• ${prefix}lisa <teks>
• ${prefix}changemymind <teks>
• ${prefix}blur <caption / reply>
• ${prefix}jojo <caption / reply>
• ${prefix}trash <caption / reply>
• ${prefix}rip <caption / reply>
• ${prefix}burn <caption / reply>
• ${prefix}circle <caption / reply>
• ${prefix}wanted <caption / reply>
• ${prefix}wasted <caption / reply>
• ${prefix}hornycard <caption / reply>
• ${prefix}komunis <caption / reply>
• ${prefix}patrick <caption / reply>
• ${prefix}spongebob <caption / reply>

❏ *Misc*
• cekprefix
• ${prefix}owner
• ${prefix}runtime
• ${prefix}speed
• ${prefix}listgrup
• ${prefix}quotes
• ${prefix}ppcouple
• ${prefix}get <url>
• ${prefix}rvo <reply>
• ${prefix}delete <reply>
• ${prefix}quotesanime

❏ *Owner*
• $
• > / >>
• ${prefix}self
• ${prefix}public
• ${prefix}restart
• ${prefix}join <url>
• ${prefix}setprefix [prefix]
• ${prefix}setppbot <caption / reply>
`.trim()
}

exports.penggunaan = () => {
return `
Panduan:
Format command
< > adalah wajib di isi/lakukan
[ ] adalah query tambahan, jika tidak ada bot akan menganggap pilihan default
( ) tidak masuk command, sekedar informasi

Contoh command full:
${prefix}sticker -crop
Contoh command biasa:
${prefix}sticker

reply: mereply sesuatu lalu ketik command
caption: upload media dengan caption command
url: link yang ingin dieksekusi
query: parameter. semisal query pinterest adalah gambar apa yang kalian ingin cari

BOT BUKAN BABU, BOT HANYA MEMBANTU!!
`.trim()
}

exports.mess = {
  wait: '*[ SABAR ] Sedang proses!!*',
  group: 'FITUR ONLY GROUP.',
  admin: 'FITUR HANYA ADMIN!!',
  botAdmin: 'BOT BUKAN ADMIN!!.',
  owner: 'OWNER BOT ONLY!!'
}