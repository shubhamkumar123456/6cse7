import http from 'http'
const port = 8090;
import fs from 'fs'
const server = http.createServer((req , res)=>{
    if(req.url ==='/'){
        res.write('hello this is welcome page....');
        res.end()
    }
    else if(req.url==='/about'){
        res.write(`<html>
                <head></head>
                <body>
                    <h1>This is heading one</h1>
                
                </body>
            </html>`)
            res.end()
    }
    else if(req.url==='/contact'){
        let myFile = fs.readFileSync('./pages/contact.html', 'utf-8');
        res.write(myFile);
        res.end()
    }
    else{
        res.write("page not found");
        res.end()
    }
})

server.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})

// http://localhost:8090  --> server is running on this port
//  Set-ExecutionPolicy unrestricted




