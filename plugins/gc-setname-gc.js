let handler = async (m, { conn, args, usedPrefix, command }) => {

    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    m.reply(`hallo kak anda telah Sukses mengganti nama group`)
  }
  
  handler.help = ['setnamegc <text>']
  handler.tags = ['group']
  handler.command = /^setnamegc$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true

module.exports = handler
  
  
