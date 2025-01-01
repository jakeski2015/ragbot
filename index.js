var memeList = ['https://cdn.discordapp.com/attachments/703295246640873522/756321028723966052/video0.mp4', 
                'https://youtu.be/GhxqIITtTtU?t=11',
                'https://www.youtube.com/watch?v=SwA2R9OyamE',
                'https://cdn.discordapp.com/attachments/732340806433767504/732343172612620308/video0-3.mov',
                'https://cdn.discordapp.com/attachments/732340806433767504/732343479316905994/video0-6_1.mp4',
                'https://cdn.discordapp.com/attachments/732024840802009138/735541852635267132/video0-4.mp4', 
                'https://cdn.discordapp.com/attachments/487841995511955456/804379649944715274/FB_IMG_1605675677917.jpg', 
                'https://youtu.be/PnKgygXPxm4', 
                'https://www.youtube.com/watch?v=zYUvgxwuJbA', 
                'https://cdn.discordapp.com/attachments/592828773984895008/793633756154036254/131070258_670024750341752_8474472275269185477_n.mp4', 
                'https://cdn.discordapp.com/attachments/750069556818739243/787318935422763008/video0.mp4', 
                'https://cdn.discordapp.com/attachments/732024840802009138/735540452161224804/rip_cat.mp4',
                'https://cdn.discordapp.com/attachments/600105798693027840/610239048925052977/Thumbnail_1565558871208.png',
                'https://youtu.be/S3iVkw44VXs',
                'https://cdn.discordapp.com/attachments/678095998320640011/783519457539653682/video0-3.mp4',
                'https://cdn.discordapp.com/attachments/740717726451892314/773973239964893204/video0.mp4',
                'https://cdn.discordapp.com/attachments/732024840802009138/735539567142109266/Wee.._Cock_and_balls.mp4',
                'https://cdn.discordapp.com/attachments/712099824539009065/712240216865505310/Banned.mp4',
                'https://cdn.discordapp.com/attachments/732024840802009138/735543133865115728/no_al_fornite.mp4',
                'https://tenor.com/view/griffin-peter-familyguy-changing-clothes-eating-chocolate-gif-5218993',
                'https://cdn.discordapp.com/attachments/119211917519618050/805607571238289458/video0.mp4',
                'https://tenor.com/view/punching-boxing-penis-gif-18222057',
                'https://media.discordapp.net/attachments/567494948010590227/586281449473310720/image0-1.jpg',
                'https://cdn.discordapp.com/attachments/772621222730399764/775545818823524382/video010.mp4',
                'https://cdn.discordapp.com/attachments/734092223477710889/735882232941641858/video1.mp4',
                'https://cdn.discordapp.com/attachments/355038539836030976/782948783066447902/PicsArt_07-24-11.png',
                'https://cdn.discordapp.com/attachments/692087320371003445/735681120854868058/video0.mov',
                'https://tenor.com/view/bad-teeth-hi-hello-wave-gif-14630063',
                'https://cdn.discordapp.com/attachments/694999182116782151/822133720793743380/video0-4.mp4',
                'https://cdn.discordapp.com/attachments/644629482078208037/809127095774347354/video6.mp4',
                'https://cdn.discordapp.com/attachments/732340806433767504/733039168111902781/video0_1_1.mp4',
                'https://cdn.discordapp.com/attachments/694999182116782151/824019919929868368/video0-1.mp4',
                'https://tenor.com/view/botgrinder-fpv-nipple-asian-gif-19178441',
                'https://tenor.com/view/kung-fu-nuts-kung-fu-training-pain-endurance-gif-7886249',
                'https://www.youtube.com/watch?v=JEBA8k6wOU8',
                'https://cdn.discordapp.com/attachments/773541830658752542/830454276916248576/unknown.png',
                'https://cdn.discordapp.com/attachments/539716601008619534/625078424503058433/DSAASDDDSAD.mov',
                'https://cdn.discordapp.com/attachments/846491408475095040/852535637391441950/videoplayback_7.mp4',
                'https://cdn.discordapp.com/attachments/802281935308849192/855274874913423380/video0-197_2.mp4',
                'https://cdn.discordapp.com/attachments/755446515627065468/860330000312696892/9860f7af25e21fc0aa4d2c525e62bc2d.png',
                'https://cdn.discordapp.com/attachments/766321077076492338/866494447277572166/Kids.mp4']

var lengthy = ['=', '==', '===', '====', '=====', '======', '=======', '========', '=========', '==========', '=====================']

const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
client.msgs = require('./msgs.json')
prefix = '!'

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', (message) => {
  if(message.content.startsWith(`${prefix}meme`)) {
    var tempSplits = message.content.split('', 2)
    var keyVal = tempSplits[1]
    var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2)

    if (client.msgs[message.author.id] == undefined) {
      client.msgs[message.author.id] = {}
      }
    client.msgs[message.author.id][keyVal] = messageVal

    fs.writeFile('./msgs.json', JSON.stringify(client.msgs, null, 4), (err) => {
      if (err) throw err
      message.channel.send(memeList[Math.floor(Math.random()*(memeList.length))])
    })
  }
})

client.on('message', (message) => {
  if(message.content.startsWith(`${prefix}size`)) {
    var tempSplits = message.content.split('', 2)
    var keyVal = tempSplits[1]
    var messageVal = message.content.slice(tempSplits[0].length + tempSplits[1].length + 2)

    if (client.msgs[message.author.id] == undefined) {
      client.msgs[message.author.id] = {}
      }
    client.msgs[message.author.id][keyVal] = messageVal

    fs.writeFile('./msgs.json', JSON.stringify(client.msgs, null, 4), (err) => {
      if (err) throw err
      message.channel.send('(' + lengthy[Math.floor(Math.random()*(lengthy.length))])
    })
  }
})


client.login('login key goes here')
