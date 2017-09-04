const Websocket = require('ws').Server;
const sever = new Websocket({port:8181});
sever.on('connection',(ws)=>{
    console.log('suceess');
    ws.on('message',(massage)=>{
        console.log(massage);
    });

})