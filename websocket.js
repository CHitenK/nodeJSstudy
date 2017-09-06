const Websocket = require('ws').Server;
const querystring = require('querystring');
const sever = new Websocket({port:8181});
const arr = [];
let num = 0;
sever.on('connection',(ws)=>{
    num++;
    ws.on('message',(massage)=>{
        var initNum=num;
        ws.send(JSON.stringify({initNum}));
       // console.log(JSON.parse(12345));
       if(massage=='start'){
           if(arr.length>0){
               ws.send(JSON.stringify(arr));
               return false;
           }else {
               ws.send('nothing');
               return false;
           }
       }else{
           console.log(arr);
           var index = initNum;
           var massage = massage;
           var dataObj= {index,massage};
           var obj = JSON.stringify(dataObj);
           arr.push(dataObj);
           ws.send(JSON.stringify(arr));
       }
    });
})