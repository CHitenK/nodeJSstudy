const Websocket = require('ws').Server;
const querystring = require('querystring');
const sever = new Websocket({port:8181});
const arr = [];
sever.on('connection',(ws)=>{
    ws.on('message',(massage)=>{
       if(massage=='start'){
           if(arr.length>0){
               ws.send(JSON.stringify(arr));
               return false;
           }else {
               ws.send('nothing');
               return false;
           }
       }else{
           var dataObj= JSON.parse(massage);
           arr.push(dataObj);
           sever.clients.forEach((index)=>{
               index.send(JSON.stringify(arr));
           })
       }
    });
})