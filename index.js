// os = require('node:os');
// network = os.networkInterfaces();
// console.log(network)


// express = require('express');
// app = express();
// port = 3000;
// app.set('trust proxy',true)


// app.listen(3000,()=>{
//     console.log('Listening on port' + port);
// })

// app.get('/',async(req,res)=>{
//     ip =req.ip
//     console.log(ip)
//     res.send(ip)
// })

        // ------install ip, local-ip-----
// ip = require('ip')
// console.log(ip.address())
// gip = require('local-ip')
// console.log(gip)


        // -----socket------
// http = require('node:http');
// dns =require('node:dns');
// http.createServer((req,res)=>{
  
//     ip = req.socket.localAddress
//     dns.lookup(ip,(err,address,family)=>{
//         console.log('dns: ' + address + " family: " + family)
//     })
//     console.log(ip);
//     res.end(ip);
// }).listen(3000)

http = require('node:http');
http.get('http://api.ipify.org',(res)=>{
    data = '';
    res.on('data',(chunk)=>{
        data += chunk;
    });
    res.on('end',()=>{
        ip =data.trim();
        console.log(ip);
    })
}) 