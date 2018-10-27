//为了解决回调地狱的问题，es6新增了promise对象来解决
//一1.封装promise对象
//2.创建promise容器
//在容器中防撞异步操作
//成功resolve
//失败reject

//二：调用
//promise 对象有一个 then 方法用来接收容器的执行结果
//then 支持继续往后链式的then调用
//then 里面返回普通数据没有意义，  需要返回promise
const fs = require('fs')

var p1 = new Promise(function(resolve,reject){
    fs.readFile('./data/a.txt','utf8',(err,data)=>{
        if (err){
            reject(err)
        }else{
            resolve(data)
        }

    })
})

var p2 = new Promise(function(resolve,reject){
    fs.readFile('./data/b.txt','utf8',(err,data)=>{
        if (err){
            reject(err)
        }else{
            resolve(data)
        }

    })
})
var p3 = new Promise(function(resolve,reject){
    fs.readFile('./data/c.txt','utf8',(err,data)=>{
        if (err){
            reject(err)
        }else{
            resolve(data)
        }

    })
})

p1
.then(function(data){
    console.log(data)
    return p2
})
.then(function(data){
    console.log(data)
    return p3
})
.then(function(data){
    console.log(data)
})