/*
* process对象用于处理与当前进程相关的事情，它是一个全局对象，可以在任何地方直接访问到它而无需引入额外模块。(无需引入);
* process是一个全局进程(node主进程)，你可以直接通过process变量直接访问它。
* 虽然node对操作系统做了很多抽象的工作，但是你还是可以直接和他交互，比如和系统中已经存在的进程进行交互，创建工作子进程。node是一个用于事件循环的线程，
* 但是你可以在这个事件循环之外创建其他的进程（线程）参与工作。
* */

/*
* 属性
 process对象提供一系列属性，用于返回系统信息。

 process.pid：当前进程的进程号。
 process.version：Node的版本，比如v0.10.18。
 process.platform：当前系统平台，比如Linux。
 process.title：默认值为“node”，可以自定义该值。
 process.argv：当前进程的命令行参数数组。
 process.env：指向当前shell的环境变量，比如process.env.HOME。
 process.execPath：运行当前进程的可执行文件的绝对路径。
 process.stdout：指向标准输出。
 process.stdin：指向标准输入。
 process.stderr：指向标准错误。*/

console.log(process.pid); //15628 当前进程的进程号。
console.log(process.version);//v6.2.0 Node的版本
console.log(process.platform);//win32 当前系统平台
console.log(process.title)// Windows PowerShell
console.log(process.argv); //当前进程的命令行参数数组。
console.log(process.execPath); //运行当前进程的可执行文件的绝对路径
//console.log(process.env); //指向当前shell的环境变量

//主要属性
//(1)stdout process.stdout用来控制标准输出，也就是在命令行窗口向用户显示内容。它的write方法等同于console.log。
process.stdout.write('qwert') //窗口输出 qwert

/* 方法
 process.exit()：//process.exit(0)  process.abort() 退出当前进程。
 process.cwd()：返回运行当前脚本的工作目录的路径。_
 process.chdir()：改变工作目录。
 process.nextTick()：将一个回调函数放在下次事件循环的顶部。
* */
console.log(process.cwd()); //E:\UDweb\nodeJS\nodeJSstudy

//process.nextTick()：将一个回调函数放在下次事件循环的顶部 即立即执行

// 进程退出时触发 当process退出时触发。即我们按“ctrl+c”时触发。
 process.on('exit',()=>{
     console.log('exit');
 })

/*
* process.stdin
 进程控制台输入流，
 命令行下输入
 */
/*process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    process.stdout.write('data: ' + chunk);
});
process.stdin.on('end', function () {
    process.stdout.write('end');
});*/
console.log(process.pid); //9880
console.log(process.memoryUsage()) //进程的内存使用情况
console.log(process.uptime()); //0.145s  //node进程运行的秒数

//进程出现异常时触发
process.on('uncaughtException', function() {
    console.log('捕获到一个异常');
});
//事件'SIGINT' 捕获当前进程接收到的信号（如按下了 ctrl + c）：
process.on('SIGINT', function() {
    console.log('收到 SIGINT 信号。');
});