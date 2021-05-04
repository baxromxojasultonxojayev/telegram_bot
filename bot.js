const telegramBot = require('node-telegram-bot-api')

const bot = new telegramBot(TOKEN , {
  polling: true
})

const Database = require('./base')
const TextController = require('./controller/TextController')

const db = new Database(`mongodb+srv://baxromxoja:baxromxoja_12@bot.egdup.mongodb.net/bot `)
bot.on('message', async (message) => {

  TextController(message, bot, db)

})




//   const products =[
//     {
//       label: 'Lap top',
//       amount: (6000000) * 100
//     }
//   ]
//   if(text == '/payment'){
//     bot.sendInvoice(chatId,'Lap-Top', 'The Best One yesterday was bought','TEST', PAYME_TOKEN, "test", 'UZS', products, {
//       need_phone_number: true,
//       need_shipping_address: true,
//       need_name: true,
//       photo_url: "https://picsum.photos/300"
//     } )
//   }

// })
// bot.on('pre_checkout_query', (chekckout) =>{
//   bot.answerPreCheckoutQuery(checkout.id, true)
// })

// bot.on('callback_query', async message =>{
//   const chatId = message.from.id
//   const data = message.data
//   const message_id = message.message.message_id

//   if(data == 'tashkent'){
//     bot.editMessageText('Siz Toshkentni tanladingiz', {
//       chat_id: chatId,
//       message_id: message_id
//     })
//   }


// if(text === "/start"){

//   const keyboard = {
//     inline_keyboard: [
//       [
//         {
//           text: 'Assalom Toshkent',
//           callback_data: 'tashkent'
//         },
//         {
//           text: 'Assalom Samarqand',
//           callback_data: 'samarkand'
//         }
//       ],
//       [
//         {
//           text: 'Bizning web saytimiz',
//           url: 'https://google.com'
//         }
//       ]
//     ]
//   }

//   bot.sendMessage(chatId, `Assalomu aleykum <i>${name}</i>`, {
//     parse_mode: "HTML",
//     reply_to_message_id: messageId,
//     reply_markup: keyboard
//   })
// }
// const keyboard = {
//   resize_keyboard: true,
//   one_time_keyboard: true,
//   keyboard: [
//     [
//       {
//         text: 'Toshkent'
//       },
//       {
//         text: 'Andijon',
//         request_contact: true
//       },

//       {
//         text: 'Samarqand',
//         request_poll: {
//           type: 'quiz'
//         }
//       },
//       {
//         text: 'Xorazm'
//       }
//     ]
//   ]
// }






  // }else if(text ==="/photo"){
  //   bot.sendPhoto(chatId, 'https://picsum.photos/3000', {
  //     caption: 'This is a pic'
  //   })
  // }else if(text === "/document") {
  //   bot.sendDocument(chatId , 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf')
  // }
  // else if(text === "/media") {
  //   let mediaList = []
  //   mediaList.push({
  //     type: 'audio',
  //     media: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',
  //     caption: 'hello'
  //   }),
  //   mediaList.push({
  //     type: 'audio',
  //     media: 'https://picsum.photos/3000'
  //   })
  //   bot.sendMediaGroup(chatId, mediaList)
  // } else if( text === '/location'){
  //   bot.sendVenue(chatId, 41.272796, 69.365229, 'Yashnaobod tumani', 'Bunyodkor kochasi 3 tor 5-uy')
  // } else if(text === '/sendContact'){
  //   bot.sendContact(chatId, ' +998973307424', name)
  // } else if(text == '/dice'){
  //   await bot.sendChatAction(chatId, 'typing')
  //   await bot.sendDice(chatId, {
  //     emoji: '🎲',
  //     emoji: '🎯'
  //   })
  // } else if(text == '/userInfo'){
  //   let photos = await bot.getUserProfilePhotos(chatId)
  //   // let photo = await bot.getFile(photos.photos[0][2].file_id)
  //   await bot.sendPhoto( chatId, photos.photos[10][2].file_id)
  // }