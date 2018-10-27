const fs = require('fs')
const readFile = require('./03.readfile-promise')
readFile('./data/a.txt')
.then(function(data){
    console.log(data)
    return readFile('./data/b.txt')
})
.then(function(data){
    console.log(data)
    return readFile('./data/c.txt')
})
.then(function(data){
    console.log(data)
})




