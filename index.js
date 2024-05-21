// const fs = require('fs');

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {

        //reade file
        const data = await fsPromises.readFile(path.join(__dirname, 'Files', 'lorem.txt'), 'utf8');
        console.log(data);

        //delete file
        await fsPromises.unlink(path.join(__dirname, 'Files', 'delete.txt'));
        //write file
        await fsPromises.writeFile(path.join(__dirname, 'Files', 'promisewrite.txt'), data);
        //update file
        await fsPromises.appendFile(path.join(__dirname, 'Files', 'promisewrite.txt'), '\n\nNice to meet you');
        //rename file 
        await fsPromises.rename(path.join(__dirname, 'Files', 'promisewrite.txt'), path.join(__dirname, 'Files', 'promisecomplete.txt'));
        
        //reade file
        const newdata = await fsPromises.readFile(path.join(__dirname, 'Files', 'promisecomplete.txt'), 'utf8');
        console.log(newdata);
    } catch (error) {
        console.error(error);
    }
};

fileOps();


// //reade file data
// fs.readFile(path.join(__dirname,'Files','lorem.txt') , 'utf8',(err , data) =>{
//    if (err) throw err;
//    console.log(data.toString())
// })

// console.log('hello world')

// // write file
// fs.writeFile(path.join(__dirname,'Files','reply.txt'),'Nice to meet you ',(err) =>{
//     if (err) throw err;
//     console.log('write complete')
// //update file

//     fs.appendFile(path.join(__dirname,'Files','reply.txt'),'\n\nyes it is ',(err) =>{
//         if (err) throw err;
//         console.log('appent complete')

//         //rename the file naem 

//         fs.rename(path.join(__dirname,'Files','reply.txt'),path.join(__dirname,'Files','newreply.txt'),(err) =>{
//             if (err) throw err;
//             console.log('rename complete')
//          })
//      })
//  })



// catch erro

process.on('uncaughtException',err => {
    console.log('Ther was ab uncaught error:$(err)');
    process.exit(1);
})