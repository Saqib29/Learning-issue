const fs = require('fs');

// const data = {
//     name: 'Saqib Aminul',
//     email: 'saqib29111@gmail.com'
// };

// fs.writeFile('myFile.json', JSON.stringify(data), (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File write complete.");
//     }
// });

fs.readFile('./myFile.json', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(`String Data: ${data}`);
        const obj = JSON.parse(data);
        console.log(obj);
    }
});


// const path = require('path');
// const myPath = `D:/Learning-issue/Node JS/app.js`;
// console.log(path.isAbsolute(myPath));

// const pp = path.resolve(__dirname, 'newfolder', 'another_folder');
// console.log(pp);


// const os = require('os')

// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

