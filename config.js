const fs = require('fs')

global.packName = 'ZyyXtrime'
global.authorName = 'REALZI BOT'
global.prefix = '#'
global.mode = 'publik'
global.ownerNumber = ['6289503657396']
global.thumb = fs.readFileSync('./thumb.jpeg')

global.APIs = {
	zaki: 'https://api.kizakixd.xyz/api'
}
global.APIKeys = {
	'https://api.kizakixd.xyz/api': 'p8fEPmpcwKlWQfmZ2QwcuWu2N' //register buat dapetin api di : https://api.kizakixd.xyz/api
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`[UPDATE] '${__filename}'`)
    delete require.cache[file]
    require(file)
})
