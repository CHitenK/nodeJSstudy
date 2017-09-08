const fs= require('fs');
const path = require('path');
let data = '';
//创建可读流
const readSteam = fs.createReadStream(__dirname+'/libs/sourse/read.txt');
//设置字符类型
readSteam.setEncoding('utf8');
//打开
readSteam.on('open',(data)=>{
    console.log(data);
    console.log('open');
})
//读取
readSteam.on('data',(chuck)=>{
    data+=chuck;
})
//完成
readSteam.on('end',()=>{
    console.log(data);
    console.log('done');
})
//关闭
readSteam.on('close',()=>{
    console.log('end');
})
//出错
readSteam.on('error',(err)=>{
    console.log(err);
})
/*readSteam.pause()    //暂停
readSteam.resume()     //开始
*/
//创建可写流
const writeStream = fs.createWriteStream(__dirname+'/libs/sourse/input.txt');
let text = '人生何处不相逢！';
//写入
writeStream.write(text,'utf8',(erro,kata)=>{
    console.log(kata);
})
//最后写入
writeStream.end('结束');

//复制
var rs = fs.createReadStream(__dirname+'/libs/sourse/read.txt');
var ws = fs.createWriteStream(__dirname+'/libs/sourse/copy.txt');
var textData = '';
rs.on('data',(chuck)=>{
    textData+=chuck;
})
rs.on('close',()=>{
   ws.write(textData,'utf8',()=>{
       console.log('ok');
   })
    ws.end('。');
})

//管道流读写
var rs = fs.createReadStream(__dirname+'/libs/sourse/read.txt');
var ws1 = fs.createWriteStream(__dirname+'/libs/sourse/pipe.txt');
rs.pipe(ws1);
rs.on('data', function (data) {
    console.log('数据可读')
});
rs.on('end', function () {
    console.log('文件读取完成');

});

//链式流 压缩
const zlib = require('zlib');
let readSt = fs.createReadStream(__dirname+'/libs/sourse/read.txt');
readSt.pipe(zlib.createGzip())
      .pipe(fs.createWriteStream(__dirname+'/libs/sourse/zlip1.txt.gz'));
console.log('压缩完成');

//解压
setTimeout(()=>{
    var readZlip = fs.createReadStream(__dirname+'/libs/sourse/zlip1.txt.gz');
    readZlip.pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(__dirname+'/libs/sourse/zlip1.txt'));
    console.log('解压完成');
},3000)
/*
* 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
 data - 当有数据可读时触发。
 end - 没有更多的数据可读时触发。
 error - 在接收和写入过程中发生错误时触发。
 finish - 所有数据已被写入到底层系统时触发。
* */
console.log('================================================');
//复制video文件
var out = process.stdout;
var filesPath=  __dirname+'/libs/video/rcqwl.swf';
var videoRed = fs.createReadStream(filesPath);
var videoWri = fs.createWriteStream(__dirname+'/libs/video/copy.swf');

var stas = fs.statSync(filesPath);
console.log(stas);
var totalSize = stas.size;
var pathLength = 0;
var lastSize = 0;
var startTime = Date.now(); // 等于 var times = new  Date().getTime();
videoRed.on('data',(chuck)=>{
    pathLength+=chuck.length;
    //写入没完成
    if(videoWri.write(chuck) ==false){
        videoRed.pause();//取数据暂停
    }
})
//结束处理
videoRed.on('end',()=>{
    videoWri.end();
})
//写完暂停结束
videoWri.on('drain',()=>{
    videoRed.resume();
})

var timer = setInterval(function show() {
    var percent = Math.ceil((pathLength/totalSize)*100);
    var size = Math.ceil(pathLength / 1000000);
    var diff = size - lastSize;
    lastSize = size;
    out.clearLine();
    out.cursorTo(0);
    out.write('已完成' + size + 'MB, ' + percent + '%, 速度：' + diff * 2 + 'MB/s');
    if (pathLength < totalSize) {
        setTimeout(show, 500);
    } else {
        var endTime = Date.now();
        console.log('共用时：' + (endTime - startTime) / 1000 + '秒。');
        clearInterval(timer);
    }
},500)
console.log('================================================');