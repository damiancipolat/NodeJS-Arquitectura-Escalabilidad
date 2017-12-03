## Clonación
Tradicionalmente, un webserver multihilo usualmente se escala solo cuando los recursos asignados a la maquina no pueden ser actualizados más o cuando el costo de escalar es tan alto que es menor
el usar otra maquina para correr otra instancia. Usando multihilos tradicionalmente los webservers pueden hacer mayor uso del CPU. Pero en Nodejs estamos atados a trabajar en una aplicación single-thread por ende
no podemos usar más de un hilo y tenemos la limitación de la memoria de 1GB.

La forma de ampliar la capacidad de proceso es clonando nuestra aplicación y ejecutando una o más instancias, podemos hacerlo usando  [Cluster module].

![N|Solid](http://damiancipolat.com/webFiles/cluster.png)

Si queres leer más sobre este modulo podes pasar por mi repo de paralelismo y concurrencia en donde muestro el modulo **[CLUSTER]**.

[CLUSTER]:https://github.com/damiancipolat/NodeJS-Concurrencia-Paralelismo/tree/master/cluster
[Cluster module]: file:///C:/Users/damian/Desktop/Misc/Node.js%20Design%20Patterns_1.pdf

Podemos probar dos tipos de script para entender este concepto: single.js y cluster.js son archivos que se encuentran dentro de este repositorio.

### Una sola instancia:

```sh

"Ejecutar una consola:"
$ node single.js

"Vamos a medir la performance del server:"
$ autocannon -c 100 -d 60 http://127.0.0.1:8080 -T -l

```
Los resultados obtenidos por **autocannon**:

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

### Cuatro instancias de forma concurrente:

```sh

"Ejecutar una consola:"
$ node cluster.js

"Vamos a medir la performance del server:"
$ autocannon -c 100 -d 60 http://127.0.0.1:8080 -T -l

```
Los resultados obtenidos por **autocannon**:

```sh
$ autocannon -c 100 -d 60 http://127.0.0.1:8080 -T -l
Running 60s test @ http://127.0.0.1:8080
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 164.07  111.62  640
Req/Sec      607.19  99.86   759
Bytes/Sec    70.6 kB 11.8 kB 90.1 kB

Percentile      Latency (ms)
50              162
75              233
90              305
99              469
99.9            564
99.99           615
99.999          640

36k requests in 60s, 4.23 MB read

Obtuvimos 36.000 request en 1 minuto.

```
La mejora es notable, obtuvimos el triple de la cantidad en el mismo tiempo que el caso anterior.


## Balanceo de carga
El modulo cluster no es la unica opción que tenemos para escalar nuestra aplicación web con Node.js, de hecho las tecnicas tradicionales son las más preferidas, por que ofrecen más control y potencia en entornos de producción.

La alternativa a usar el modulo cluster, es iniciar **multiples instancias** de la misma aplicación ejecutandose en distinos puertos de la maquina. La forma de controlarlos no es usando un proceso master que maneje workers. Para proveer un unico punto de acceso a nuestra aplicación, podemos usar un "reverse proxy", que es un dispositivo o servicio ubicado entre los clientes y las intancias de nuestra aplicación, el cual toma un request y lo redirecciona al servidor destino, retornando el retorno del request desde el server al cliente. Esto se usa como balanceo de carga, distributendo los requests a lo largo de las instancias de la aplicación.

![N|Solid](damiancipolat.com/webFiles/load_balance.png)

Ejemplos de balanceadores de carga que usan un reverse proxy:
- Nginx (http://nginx.org)
- HAProxy (http://www.haproxy.org)
- Node.js-based proxis
- Cloud-based proxies






