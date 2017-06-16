var fs = require('fs')
var path = require('path')
var Canvas = require('canvas')
    ,Image = Canvas.Image
Canvas.registerFont(path.join(__dirname, '/Font/', 'ChineseBlack.ttf'),{family:'STHeiti'})
var img = new Image();
img.src = fs.readFileSync(path.join(__dirname, '1.jpg'));


var canvas = new Canvas(img.width, img.height)
var ctx = canvas.getContext('2d');
ctx.drawImage(img,0,0,img.width,img.height);
canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'waterMark.png')))

ctx.rotate(.1)
ctx.font = '50px Impact'
ctx.fillStyle = '#FF0000'
ctx.fillText('我的家', 100, 100)

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'waterMark.png')))