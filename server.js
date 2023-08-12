const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res) =>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default:
            path+='error_404.html';
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            
        }
        res.end();
    })
});
server.listen(3000,'localhost',()=>{
    console.log('listening to the server at port 3000');
});