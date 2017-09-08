//引进events模块
const EventEmitter = require('events').EventEmitter;
const event = new  EventEmitter;
/*
* EventEmitter.prototype生成的函数包括:

 on = addListener ( type, callback )       // 注册函数，类似原生addListener的机制
 once ( type, callback )                   // 通过fired（bool类型），注册函数只运行一次
 removeListener ( type, callback )                    // 取消注册，类似原生removeListener
 removeAllListeners ( type )                             // 遍历_events，循环调用removeListener
 emit ( type )                                                     // 遍历_events,  循环调用_events注册的函数
 setMaxListeners ( n )                                       // 设置每个_events属性最大注册函数上限
 listeners ( type )                                              // 提取_events中注册的函数
 EventEmitter.listenerCount ( emitter, type )  // 获取注册的函数最大数量

* */
//注册事件
event.on('tata',(str,str1)=>{
    console.log(str+str1);
})
let strRulst = event.emit('tata','cmk ','is good');
console.log(strRulst); //true
/*
 2. event.on(event, listener) 为事件注册一个监听
 参数1：event  字符串，事件名
 参数2：回调函数
 */

/*
 3. event.emit(event, [arg1], [arg2], [...])   触发指定事件
 参数1：event  字符串，事件名
 参数2：可选参数，按顺序传入回调函数的参数
 返回值：该事件是否有监听
 */


/*
 event.once(event, listener)  为事件注册一次性监听，触发一次后移除监听
 参数1：event  字符串，事件名
 参数2：回调函数
 */
event.once('fafa',(string,string1)=>{
    console.log(string+string1);
})
event.emit('fafa','一次就好，','真的！'); //一次就好，真的！
event.emit('fafa','ggg，','真的！'); //不执行