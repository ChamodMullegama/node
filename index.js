const fs = require('fs');
const path = require('path');

//reade file data
fs.readFile(path.join(__dirname,'Files','lorem.txt') , 'utf8',(err , data) =>{
   if (err) throw err;
   console.log(data.toString())
})

console.log('hello world')

// write file
fs.writeFile(path.join(__dirname,'Files','reply.txt'),'Nice to meet you ',(err) =>{
    if (err) throw err;
    console.log('write complete')
//update file

    fs.appendFile(path.join(__dirname,'Files','reply.txt'),'\n\nyes it is ',(err) =>{
        if (err) throw err;
        console.log('appent complete')

        //rename the file naem 

        fs.rename(path.join(__dirname,'Files','reply.txt'),path.join(__dirname,'Files','newreply.txt'),(err) =>{
            if (err) throw err;
            console.log('rename complete')
         })
     })
 })



// catch erro

process.on('uncaughtException',err => {
    console.log('Ther was ab uncaught error:$(err)');
    process.exit(1);
})