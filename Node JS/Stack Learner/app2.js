const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(`Request came from  ${req.url}`);
    // res.end('<h1>Hello Saqib</h1>');

    if(req.url === '/'){
        fs.readFile('./index.html', (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.end(data);
            }
        });
    }else{
        res.end("<h1 style='color: red'>404 not Found!</h1>");
    }

});


server.listen(9000);
console.log('Server is running');