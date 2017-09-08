/*
*   node  http 模块
* */
const  http = require('http');
const url = require('url');
const queryString = require('querystring');
const util = require('util');
const sevser = http.createServer((req,res) => {
        // 发送 HTTP 头部
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
        //写在窗口中
        res.write("Hello Node");

       //获取客户端Get 发送的数据
        var urlStr = req.url;
        console.log(req.url); //返回路径
        var urlObj = url.parse(urlStr,true);
        //获取客户端Get 发送的数据
        var data = urlObj.query;
        // console.log(data); //{ name: '123', age: '88', id: '12345678' }


        //获取post的数据
        let post = '';
        req.on('data',(chunk)=>{
            post+=chunk;
        });
        res.on('end',()=>{
            //将字符串变为json的格式
            post  =  querystring.parse(post);
            //向前端返回字符串
            res.end(util.inspect(post));
        });

}).listen('8889');
console.log('http start');
/*  重要属性
   request.url
   request.headers
   request.headers

 response.setTimeout(msecs, callback)
 设置http超时返回的时间，一旦超过了设定时间，连接就会被丢弃

 response.statusCode
 设置返回的网页状态码

 response.setHeader(name, value)
 设置http协议头

 response.headersSent
 判断是否设置了http的头

 response.write(chunk, [encoding])
 返回的网页数据，[encoding] 默认是 utf-8

 response.end([data], [encoding])
 将设置的数据包，发送数据到客户端。
 *
* */
