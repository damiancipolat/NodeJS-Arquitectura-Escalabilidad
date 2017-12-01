## Clonación
Tradicionalmente, un webserver multihilo usualmente se escala solo cuando los recursos asignados a la maquina no pueden ser actualizados más o cuando el costo de escalar es tan alto que es menor
el usar otra maquina para correr otra instancia. Usando multihilos tradicionalmente los webservers pueden hacer mayor uso del CPU. Pero en Nodejs estamos atados a trabajar en una aplicación single-thread por ende
no podemos usar más de un hilo y tenemos la limitación de la memoria de 1GB.

La forma de ampliar la capacidad de proceso es clonando nuestra aplicación y ejecutando una o más instancias, podemos hacerlo usando  [Cluster module].

![N|Solid](http://damiancipolat.com/webFiles/cluster.png)

Si queres leer más sobre este modulo podes pasar por mi repo de paralelismo y concurrencia en donde muestro el modulo **[CLUSTER]**.

[CLUSTER]:https://github.com/damiancipolat/NodeJS-Concurrencia-Paralelismo/tree/master/cluster
[Cluster module]: file:///C:/Users/damian/Desktop/Misc/Node.js%20Design%20Patterns_1.pdf

Podemos probar dos tipos de script para entender este concepto: single.js y cluster.js
```sh

"Ejecutar una consola:"
$ node single.js

"Vamos a medir la performance del server:"
$ autocannon -c 100 -d 60 http://127.0.0.1:8080 -T -l

```
Los resultados obtenidos ppr **autocannon**:

```sh
Running 60s test @ http://127.0.0.1:8080
100 connections

Stat         Avg     Stdev Max
Latency (ms) 506.37  37.92 605
Req/Sec      196.5   5     200
Bytes/Sec    22.8 kB 541 B 23.6 kB

Percentile      Latency (ms)
50              504
75              512
90              526
99              581
99.9            605
99.99           605
99.999          605

12k requests in 60s, 1.37 MB read

Obtuvimos 12.000 request en 1 minuto.
```







## Balanceo de carga

