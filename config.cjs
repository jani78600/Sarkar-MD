// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9zaXRPUlhlTkJ3MVRDYXUxdTlMcTBwM0lielpGR3NOMGo0SGNJeTYzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2lzVW03ZHJvbjN6alRqN0VQcStQa1kvNnIwWUg2R3ZlZHpSUVBtc2NqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR2RsTmFzTDlCaktJTHFhQjZKYlhQelJUSzIyTy85ZXlqM0VGU2VYYVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3SDRhRUhCTjVGOE00bHFXZHZzUTlBQnZCUitGMkNYSktvbitER0JCdFJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCOFRrRGw5RWt0QlZaN3BHNUIxZjJGcythR25uQVd5WDkrZDFzbVZvRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBoZGRIcHNsS2ppZ0UzZGZiZzBxcFdlakw3UkdqaDhHckFaSEhoTDJvbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tVSFB5WDFwUXBYVGx5dDFNQ2dEa21telBOMjhWbFFXdy8vaElkOGRWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamxlcXJ2d1I5bXQ0RHhUemEwRldiQ3FkMHNCMDU0U0FielNzc2VuQk1EOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhrN2hJeWZ1NW8yazQ2aTgzSmFpZHlJYUFtUW4wQXlmSmt6TEp2TXFReDgwVVhlSkNMYjdqcWcyNlY1NlpDRG1WR1NXSDdwUDN2Vk1ZM0lGeEJWQ0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJRK1UyR01vZ1VRS09MVGRGZVVoSnZVMktkVnFsbXJlenhOTmdtVWh3VHVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MzIyNDMwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MDFDQ0Q0RERFRjc3REYzNTg5QTgxNUM5NTgzNDJGRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4MTUyMjMzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJCMTdQVDJCRSIsIm1lIjp7ImlkIjoiOTIzMDczMjI0MzAyOjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnYtNmA2YDZgNmA2YDZgNin24HZgNivINqp2YbZgNmA2q/wk4aqXG5cblxu8JOGqeKBsPCThqpcblxu8JOGqcKz8JOGqlxuXG7wk4ap4oGw8JOGqlxuXG7wk4ap4oG38JOGqlxuXG7wk4apwrPwk4aqXG5cbvCThqnCsvCThqpcblxu8JOGqcKy8JOGqlxuXG7wk4ap4oG08JOGqlxuXG7wk4apwrPwk4aqXG5cbvCThqnigbDwk4aqXG5cbvCThqnCsvCThqoiLCJsaWQiOiI5MDI1MDc4NTM0OTg3NjoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luYTE0Z0JFS0xmeXNFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5wQklYenp1a296VERreW5ON3RYN3Q4NmdTdjVqMzJmbUtVWUJsOXlHaG89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhRMHZKUTBNc1kwL3pWL2NyYXlQYktGVVZLUDJZelZFOC92OHdpUW8vQ29pTlpzQUw4bU9pUlBkVGhTcXh5TG9UVkdTMUtXMnRsVWo3WjVvWVlVSkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJObURoMk9BTnJtSFN0QTU2TkhneHlUcWF0M21LeXNpbkxhMXE3bkMzTG15K3ZseVRjeTYzYVBSMStuMDRsNUF1N0RNQzFkVkJPMkszUVlReTFGeUFEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3MzIyNDMwMjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNlFTRjg4N3BLTTB3NU1wemU3Vis3Zk9vRXIrWTk5bjVpbEdBWmZjaG9hIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDgxNTIyMjksImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXFpIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "SHAHID KING",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923073224302",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
