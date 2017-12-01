## Clonación
Tradicionalmente, un webserver multihilo usualmente se escala solo cuando los recursos asignados a la maquina no pueden ser actualizados más o cuando el costo de escalar es tan alto que es menor
el usar otra maquina para correr otra instancia. Usando multihilos tradicionalmente los webservers pueden hacer mayor uso del CPU. Pero en Nodejs estamos atados a trabajar en una aplicación single-thread por ende
no podemos usar más de un hilo y tenemos la limitación de la memoria de 1GB.

La forma de ampliar la capacidad de proceso es clonando nuestra aplicación y ejecutando una o más instancias, podemos hacerlo usando  [Cluster module].

![N|Solid](http://damiancipolat.com/webFiles/cluster.png)

[Cluster module]: file:///C:/Users/damian/Desktop/Misc/Node.js%20Design%20Patterns_1.pdf

´´´js

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


´´´



Si queres leer más sobre este modulo podes pasar por mi repo de paralelismo y concurrencia en donde muestro el modulo **[CLUSTER]**.

[CLUSTER]:https://github.com/damiancipolat/NodeJS-Concurrencia-Paralelismo/tree/master/cluster

## Balanceo de carga

