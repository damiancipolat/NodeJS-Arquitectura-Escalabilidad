//Single webserver
const http = require('http');
const pid  = process.pid;

http.createServer((req, res)=>{

 for(var i = 1e7; i > 0; i--) {}

 console.log('Handling request from ' + pid);
 res.end('Hello from ' + pid + '\n');

}).listen(8080, ()=>{

 console.log('Started webserver pid:' + pid+' in port 8080');

});
