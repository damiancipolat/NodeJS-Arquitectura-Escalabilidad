## Microservicios
Microservicios es la arquitectura de hoy en dia, probablemente el principal patron de refencia
para este tipo de acercamiento, donde un set de servicios auto suficientes, remplazan una gran aplicación monolitica. El prefijo **micro** signfica que el servicio debe ser lo más pequeño posible, pero siempre con
limite razonables. 

No hay que pensar que crear una arquitectura con cientos de diferentes aplicaciones, exponiendo solo un webservice es necesario es una buena decisión.

En realidad no hay ninguna regla estricta de que tan grande o chico debe ser un servicio.

Un ejemplo de como seria una aplicación monolitica es la sig.

![N|Solid](http://damiancipolat.com/webFiles/micro_moniltico.png)

Aplicando una descomposicón por funciones, podemos armar un arquitectura como la sig.

![N|Solid](http://damiancipolat.com/webFiles/micro_service_example.png)

