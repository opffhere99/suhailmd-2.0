const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_12_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSeE0vdlRHdlpva3FsNFJOTlhaV1pWQjJpSFBmOTFOS2FSTkg3VjE4UWhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAyNDgwNjYxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkZCQjVCNzhCNkNGMEE3RDBCMzg2MjJBOEIzQzhGQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NzYyMzc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImMxa3gxWFQyVHEya3p2ZndkQUcyZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRmZjlkZjAtOWU3My00YjYxLWE1MTUtN2VmMTg3ZDhhNzE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMSxcbiAgICAgIDI0LFxuICAgICAgMjgsXG4gICAgICAxNzUsXG4gICAgICAxMTgsXG4gICAgICAxNDAsXG4gICAgICA2NCxcbiAgICAgIDk3LFxuICAgICAgNCxcbiAgICAgIDg2LFxuICAgICAgMTAsXG4gICAgICA0MSxcbiAgICAgIDE3OSxcbiAgICAgIDE5NCxcbiAgICAgIDQyLFxuICAgICAgNzEsXG4gICAgICAyMjcsXG4gICAgICAxNDEsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxMzQsXG4gICAgICAxMjcsXG4gICAgICAzOCxcbiAgICAgIDIwNixcbiAgICAgIDMzLFxuICAgICAgMjUwLFxuICAgICAgMTE1LFxuICAgICAgMTg3LFxuICAgICAgNDcsXG4gICAgICAxNDEsXG4gICAgICAxMSxcbiAgICAgIDI1MixcbiAgICAgIDE4OCxcbiAgICAgIDM2LFxuICAgICAgMTQ4LFxuICAgICAgMjE1LFxuICAgICAgMjUxLFxuICAgICAgMjQ0LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5S0ZLNFlSWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDI0ODA2NjE0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NzM4MTI5OTk3ODQ1ODoxOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBaGFkIE1laG1vb2RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcnVzdFlGRUwvRDFyc0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBNU0RmQUU5V2FobUNNSkJVMVBzUGFkYVlSczBXRmRDU2FDWVpzY1NwaUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN1dieTVjSXdzM21oR2g3dC80WjNuY0F5SkpibDRnRXorNGkzTDlpSHY0RXdOaGh1TjExejhDa1FXWlZ2ZDBWakxoV3ZWNkV6d2xIVGdnMnR5VG45Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZFBRUEtCc3JjeXAwQVRETERnbWc3VTlqV0NyQTBFRVFPa3lFWVhRbjltZ3lDUzAyMjh0QThVK1NEYVJhWE40UWlIVjA0WnNYU25WSjRtTTloRjBhQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDI0ODA2NjE0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NzYyMzcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0NXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ1cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXQzY0SWlJQmxGU2VXcngyUUl1dlZQV1hIdEFyeUVDMUU1WDVRMlRDdlVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjMzNjU3MDYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc2MjM1MTE1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
