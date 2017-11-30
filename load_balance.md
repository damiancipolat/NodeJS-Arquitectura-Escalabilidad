## Clonación
Tradicionalmente, un webserver multihilo usualmente se escala solo cuando los recursos asignados a la maquina no pueden ser actualizados más o cuando el costo de escalar es tan alto que es menor
el usar otra maquina para correr otra instancia. Usando multihilos tradicionalmente los webservers pueden hacer mayor uso del CPU. Pero en Nodejs estamos atados a trabajar en una aplicación single-thread por ende
no podemos usar más de un hilo y tenemos la limitación de la memoria de 1GB.

La forma de ampliar la capacidad de proceso es clonando nuestra aplicación y ejecutando una o más instancias, podemos hacerlo usando el modulo cluster
de NODEJS [Cluster module]

[Cluster module]:https://github.com/damiancipolat/NodeJS-Concurrencia-Paralelismo/tree/master/cluster
