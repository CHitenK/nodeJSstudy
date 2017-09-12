
//引进child_process
const child_process = require('child_process');
// console.log(child_process);

//spawn 函数 用于创建子线程

let spawn = child_process.spawn;
// /const ls = spawn('ls');
var free  = spawn('ls');