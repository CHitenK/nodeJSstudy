const fs = require('fs');
const path = require('path');

//readFile(filename,[options],callback); 一部读取文件数据
/**
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */
fs.readFile(__dirname +'/libs/sourse/read.txt',{flag: 'r+', encoding: 'utf8'},(err,data)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(data);
});

//写文件
// fs.writeFile(filename,data,[options],callback);
/**
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

fs.writeFile(__dirname+'/libs/sourse/write.txt','池氏集团',{flag: 'w+', encoding: 'utf8'},(err,data)=>{{
    if(err){
        console.log(err);
        return false;
    }
    console.log('done');
}})

//追加文字
fs.appendFile(__dirname+'/libs/sourse/read.txt','就是第一',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('done again');
})

//打开文件
//// fs.open(filename, flags, [mode], callback);
/**
 * filename, 必选参数，文件名
 * flags, 操作标识，如"r",读方式打开
 * [mode],权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */

fs.open(__dirname+'/libs/sourse/read.txt','r','777',(err,fd)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(fd);
})

//读文件，读取打开的文件内容到缓冲区中；
//fs.read(fd, buffer, offset, length, position, callback);
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
 * length, 整数，读取文件的长度
 * position, 整数，读取文件初始位置；文件大小以字节为单位
 * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
 */

//6、写文件，将缓冲区内数据写入使用fs.open打开的文件
//fs.write(fd, buffer, offset, length, position, callback);
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
 * length, 整数，从缓存区中读取数据的字节数
 * position, 整数，写入文件初始位置；
 * callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
 */
//7、刷新缓存区;
// 使用fs.write写入文件时，操作系统是将数据读到内存，再把数据写入到文件中，当数据读完时并不代表数据已经写完，因为有一部分还可能在内在缓冲区内。
// 因此可以使用fs.fsync方法将内存中数据写入文件；--刷新内存缓冲区；

//fs.fsync(fd, [callback])
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * [callback(err, written, buffer)], 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
 */

//fs.exists(path, callback);  判断文件或目录是否存在
/**
 * path, 要查看目录/文件的完整路径及名；
 * [callback(exists)], 操作完成回调函数；exists true存在，false表示不存在
 */
fs.exists(__dirname+'/libs/es7',(exi)=>{
    console.log(exi); //flase 不存在
    if(!exi){
        //8、创建目录;
        //fs.mkdir(path, [mode], callback); path, 被创建目录的完整路径及目录名； [mode], 目录权限，默认0777 [callback(err)], 创建完目录回调函数,err错误对象
        fs.mkdir(__dirname+'/libs/es7',(err)=>{
            if(err){
                console.log(err);
                return false;
            }
            console.log('made');
        })

    }
})

//fs.stat(path, callback)  获取文件信息
/*
 * path - 文件路径。
 * callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象
 */
fs.stat(__dirname+'/libs/sourse/write.txt',(err,stats)=>{
   console.log(stats);
})

//使用fs.readdir读取目录，重点其回调函数中files对象
//fs.readdir(path, callback);
/**
 * path, 要读取目录的完整路径及目录名；
 * [callback(err, files)], 读完目录回调函数；err错误对象，files数组，存放读取到的目录中的所有文件名
 */
fs.readdir(__dirname+'/libs/sourse',(err,files)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(files); // [ 'read.txt', 'write.txt' ]
})

//修改文件或目录的操作权限
//fs.utimes(path, mode, callback);
/**
 * path, 要查看目录/文件的完整路径及名；
 * mode, 指定权限，如：0666 8进制，权限：所有用户可读、写，
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */

//移动/重命名文件或目录
//fs.rename(oldPath, newPath, callback);
/**
 * oldPath, 原目录/文件的完整路径及名；
 * newPath, 新目录/文件的完整路径及名；如果新路径与原路径相同，而只文件名不同，则是重命名
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */

//15、删除空目录
//fs.rmdir(path, callback);
/**
 * path, 目录的完整路径及目录名；
 * [callback(err)], 操作完成回调函数；err操作失败对象
 */
fs.rmdir(__dirname+'/libs/es7',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('remove');
})

//16、监视文件
//对文件进行监视，并且在监视到文件被修改时执行处理
//fs.watchFile(filename, [options], listener);
/**
 * filename, 完整路径及文件名；
 * [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
 * listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
 */

//17、取消监视文件
//取消对文件进行监视
//fs.unwatchFile(filename, [listener]);

/**
 * filename, 完整路径及文件名；
 * [listener], 要取消的监听器事件，如果不指定，则取消所有监听处理事件
 */

//18、监视文件或目录

// 对文件或目录进行监视，并且在监视到修改时执行处理；
// fs.watch返回一个fs.FSWatcher对象，拥有一个close方法，用于停止watch操作；
// 当fs.watch有文件变化时，会触发fs.FSWatcher对象的change(err, filename)事件，err错误对象，filename发生变化的文件名
// fs.watch(filename, [options], [listener]);

/**
 * filename, 完整路径及文件名或目录名；
 * [listener(event, filename], 监听器事件，有两个参数：event 为rename表示指定的文件或目录中有重命名、删除或移动操作或change表示有修改，filename表示发生变化的文件路径
 */

