
// 引入path 模块
const path = require('path');

// I path.normalize() 格式化路径
var strPath = './c//d/df/e/';
console.log(path.normalize(strPath));

 // path.join(..) 路径拼接 规范输出路径
console.log(path.join('./','/c','/d'));

// __dirname  当前目录绝对路径
console.log(__dirname); //E:\UDweb\nodeJS\nodeJSstudy

//path.relative(1,2)获取从 绝对路径1到绝对路径2 的相对路径

//path.dirname() 获取当前文件所在的目录

////获取路径的最后一部分  path.basename()
var str = path.basename("/a/b/c/d.txt");
console.log(str); //d.txt

//获取文件的后缀名(扩展名)
var str = path.extname("/a/b/c/1.2.3.index.html");
console.log(str);//.html

//路径解析(字符串转对象)
var obj = path.parse('/home/user/dir/file.txt');
console.dir(obj);

//路径编码(对象转字符串)
var str = path.format(obj);
console.log(str);
