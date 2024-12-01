const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElYaGhWZzdQTFlqcFpTL1hTeC80MHNpbklIaTZoRzNla2RzbmY4a0Vscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzZuak11Z1dHSlVKUHJtYTZjWVBaYVRvdHZJM3F2VGhDVmRnZ3lFMS9Tbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSDMwVklidG1taEp3Y01HemFrY1d5RUY5VzdkMEVkOU8vV29TQVJROFZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRjZRZTJxMFJrb2NnL3M3R2dRQ3VHWGdmVFBSTW9DYlpKbTRQM1M2ZkZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLMFJ5SUVnV2FSSFAwRDlFU3hFN1l4WGU3cUhOekxWd3ZzWkxTVElnRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpjR000L3VyK21lU3d4VVV0UkFRclFIL2FYekdDTHZFSHNDbmM5NlVQVUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZUVGFVYjlSRkZOamRKN2xHczR6blk0V0dSejRlaGdxanNDajR5dUZHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXBZQlNVZXhaR0dZZDJOQnRzbWtDSnNtR215YUdzL3NVSXVIK21MWXpuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZzVTRHVFlOREJaa3NEcDZPemZiMlU5aXZrYVBrQzZ2V280VDdYbVV4UzlVV0RKakRFcFV1UlRXeGdnY2JDaml6SFFUOXp6R05ZOEJrbzA2azdwRkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJrSHdiWjJFRnNzL1dobDZNd2orTCtUSENKYldEbjlWUmF0VGZNNTZqNFIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQxMTQwNjIwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzNzY1QTRGMzMwNUY4QkZFMTM3REI4MzE3MkUzNkFGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzMwMzQ1MTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldaZXRwMFBOU1l5eHhIcWxRWWl1d2ciLCJwaG9uZUlkIjoiYWE4OGY1YTEtNDg4OS00MmMzLWJlMmUtODRjYWY3ZGFmYWU5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlTbUNvNUxKMm1uZ1Aya280ZWszSS80c3NVcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZ05pVDdGcmVWaHVrMW04SnpSYzhTZjBCWU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVZaTTlQVlkiLCJtZSI6eyJpZCI6Ijk0NzQxMTQwNjIwOjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNZQkVSIEdIT1NUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV3FpOElCRUlXRXNMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveGhDQit3ZXRaZ3pkeWhGK0JpWktheFV2WFRoS3NldVlBNTF3Ujl2UFVjPSIsImFjY291bnRTaWduYXR1cmUiOiJQNVBlQjBXNjBkRXRlRGFZWWtaNUpKcG95ejJzc25PMWJ1eklNR3RVeGlnRWs3RjhJSnlGT0w5UmFOcmJXM042QUswWEFtNm5DN0ZXTzhVdzFRNmRCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNU5oc0FDcS9YSzQzRDBKeEUrYjM3MFVTYXdRWHdFWXZpYTdKR01LRSs3Umlwb25GaU4zbmVhMUh4VzFoRG9zOVNUTy9PcEZManBiSjNrbk9mVy9wQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MTE0MDYyMDo2NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmOFlRZ2ZzSHJXWU0zY29SZmdZbVNtc1ZMMTA0U3JIcm1BT2RjRWZiejFIIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzMDM0NTE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5USyJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
