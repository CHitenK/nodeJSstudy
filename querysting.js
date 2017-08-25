//引入querystring
const querystring = require('querystring');

/* 1 querystring.stringify(obj, [sep], [eq])
 对象格式化成参数字符串
 可以选择是否覆盖默认的分割符[sep]（'&'）和[eq]分配符（'='）
 */
let query = {
    'name':'123',
    age:2,
    sex:'man',
    add:'CHN',
}
console.log(querystring.stringify(query)); //name=123&age=2&sex=man&add=CHN

/*2querystring.parse(str, [sep], [eq], [options])------将一个 query string 反序列化为一个对象。
 可以选择是否覆盖默认的分割符（'&'）和分配符（'='）。*/
let str = querystring.stringify(query);
console.log(querystring.parse(str)); //{ name: '123', age: '2', sex: 'man', add: 'CHN' }

/*3 querystring.escape()参数编码*/
/* 4 querystring.unescape
 参数解码*/