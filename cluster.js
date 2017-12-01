const cluster = require('cluster');
const os      = require('os');
const http    = require('http');
const pid     = process.pid;

// Inicio un webserver
const mainServer = ()=>{

  http.createServer((req, res)=>{

   for(var i = 1e7; i > 0; i--) {}

   console.log('Handling request from ' + pid);
   res.end('Hello from ' + pid + '\n');

  }).listen(8080, ()=>{

   console.log('Started webserver pid:' + pid+' in port 8080');

  });

}

//Inicio modo de concurrencia.
if(cluster.isMaster) {

 let cpus = os.cpus().length;

 //start as many children as the number of CPUs
 for (var i = 0; i < cpus; i++)
  cluster.fork(); 

}
else
  mainServer();