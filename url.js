//引入url模块
const url = require('url');

//地址字符串
let urlStr = 'http://ai.taobao.com/search/index.htm?spm=a231o.7076277.1998549605.209.460772c1X0ZN5U&prepvid=200_10.176.152.178_223_1503544679786';

/*　1 url.parse(urlString,boolean,boolean)
  　parse这个方法可以将一个url的字符串解析并返回一个url的对象
 　　参数：urlString指传入一个url地址的字符串
 　　　　　第二个参数（可省）传入一个布尔值，默认为false，为true时，返回的url对象中，query的属性为一个对象。
 　　　　　第三个参数（可省）传入一个布尔值,默认为false，针对不知道请求的地址是什么协议的 */
console.log(url.parse(urlStr));/*Url {
                                         protocol: 'http:',
                                         slashes: true,
                                         auth: null,
                                         host: 'ai.taobao.com',
                                         port: null,
                                         hostname: 'ai.taobao.com',
                                         hash: null,
                                         search: '?spm=a231o.7076277.1998549605.209.460772c1X0ZN5U&prepvid=200_10.176.152.178_223_1503544679786',
                                         query: 'spm=a231o.7076277.1998549605.209.460772c1X0ZN5U&prepvid=200_10.176.152.178_223_1503544679786',
                                         pathname: '/search/index.htm',
                                         path: '/search/index.htm?spm=a231o.7076277.1998549605.209.460772c1X0ZN5U&prepvid=200_10.176.152.178_223_1503544679786',
                                         href: 'http://ai.taobao.com/search/index.htm?spm=a231o.7076277.1998549605.209.460772c1X0ZN5U&prepvid=200_10.176.152.178_223_1503544679786' }*/

console.log(url.parse(urlStr,true)); //query 为对象

let urlObj = url.parse(urlStr);
/*rl.format(urlObj)
 　　format这个方法是将传入的url对象编程一个url字符串并返回
 　　参数：urlObj指一个url对象*/
console.log(url.format(urlObj));// http://ai.taobao.com/search/index.htm?spm=a231o.7076277.1998549605.209.460772c1X0ZN5U&prepvid=200_10.176.152.178_223_1503544679786

/*　3 url.resolve(from,to)
 　　resolve这个方法返回一个格式为"from/to"的字符串，在宝宝看来是对传入的两个参数用"/"符号进行拼接，并返回
 第一个参数是域名,第二个参数是 path 路径
 */
console.log(url.resolve("http://whitemu.com","/gulu/index.html"));//http://whitemu.com/gulu/index.htm