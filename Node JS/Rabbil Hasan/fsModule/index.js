var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
    if(req.url == '/'){
        // Asy
        fs.readFile('Home.html', function (error, data){
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            res.end();
        });

        // Sync
        let mydata = fs.readFileSync('Home.html');
        res.writeHead(200, { 'content-type':'text/html' });
        res.write(mydata);
        res.end();

        // // File Write
        // fs.writeFile('demo.txt', 'Hello World!', function (error){
        //     if(error){
        //         res.writeHead(200, { 'content-type':'text/html' });
        //         res.write("File Write Fail");
        //         res.end();
        //     }else{
        //         res.writeHead(200, { 'content-type':'text/html' });
        //         res.write("File Write Success");
        //         res.end();
        //     }
        // });


        // // Delete File
        // fs.unlink('demo.txt', (err) => {
        //     if(err){
        //         res.writeHead(200, { 'content-type': 'text/html' });
        //         res.end("Note Deleted!");
        //     }else{
        //         res.writeHead(200, { 'content-type':'text/html' });
        //         res.end("Deleted");
        //     }
        // });

        // Is Existed file or not!
        fs.exists('deo.txt', (result) => {
            if(result){
                res.end('File exited');
            }
            else{
                res.end("File doesn't exist!");
            }
        });
        
    }
});

server.listen(5050);
console.log("Server Run Success");