/*
*   node  http 模块
* */
const  http = require('http');
const sevser = http.createServer((req,res) => {
        // 发送 HTTP 头部
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("Hello Node");
        console.log(req.headers);
        res.end();
}).listen('8889');
console.log('http start');
