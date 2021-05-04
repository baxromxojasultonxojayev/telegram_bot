module.exports = async (message, bot, db, ) =>{
  const chatId = message.chat.id
  const messageId = message.message_id
  const name = message.from.first_name
  const text = message.text

  let user = await db.findUser(chatId)
  if(!user) {
    await db.createUser(chatId)
    await bot.sendMessage(chatId, `Assalomu alaykum. Iltimos ismingizni kiriting`)
  }else if(user.step == 1){
      try{
        await db.setName(chatId, text.trim())
        await db.setStep(chatId, 2)
        await bot.sendMessage(chatId, `Tanishganimdan xursandman ${text}, yoshingizni ham kiriting`)

      }catch(e){
        bot.sendMessage(chatId, `xato ma'lumot`)
      }
  } else if(user.step == 2){
      try{
        await db.setAge(chatId, Number(text))
        await db.setStep(chatId, 3)
        await bot.sendMessage(chatId, `Tabriklayman siz bizning O'quv markazimiz ro'yxatidan o'tdingiz`)
      }catch(e){
        bot.sendMessage(chatId, `xato ma'lumot`)
      }
  } else{
    bot.sendMessage(chatId,`Siz ro'yxatdan o'tgansiz`)
  }
}