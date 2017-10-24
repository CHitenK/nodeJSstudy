//读取数据
const http = require('http');
const url = require('url');
const queryString = require('querystring');
const path = require('path');
const fs = require('fs');
// 创建服务器
var sever = http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    let pathname = request.url;
    let formData ='';
    if(pathname == '/favicon.ico'){
        //必须要有
        return false;
    }
    let resdData = fs.readFile(__dirname+pathname,{flag: 'r+', encoding: 'utf8'},(err,data)=>{
        console.log(pathname)
        if(err){
            response.write(err);
            return false;
        }else{
            response.write(data);
        }
        //必须要有
        response.end();
    })
}).listen('8787','localhost');