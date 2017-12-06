## Microservicios
> Martin Fowler escribio un gran articulo sobre microservicios en:http://martinfowler.com/articles/microservices.html

Microservicios es la arquitectura de hoy en dia, probablemente el principal patron de refencia
para este tipo de acercamiento, donde un set de servicios auto suficientes, remplazan una gran aplicación monolitica. El prefijo **micro** signfica que el servicio debe ser lo más pequeño posible, pero siempre con
limite razonables. 

No hay que pensar que crear una arquitectura con cientos de diferentes aplicaciones, exponiendo solo un webservice es necesario es una buena decisión.

En realidad no hay ninguna regla estricta de que tan grande o chico debe ser un servicio.

Un ejemplo de como seria una aplicación monolitica es la sig.

![N|Solid](http://damiancipolat.com/webFiles/micro_moniltico.png)

Aplicando una descomposicón por funciones, podemos armar un arquitectura como la sig.

![N|Solid](http://damiancipolat.com/webFiles/micro_service_example.png)

Las decisiones tomadas fueron las sig:

1) Dividir el front end de la tienda online y el admnistrador, en aplicaciones diferentes.
2) Separar los modulos, en servicios diferentes, teniendo cada uno una propia bd.
   - Productos
   - Catalogo
   - Busqueda
   - Autentificación

Pros y contras de usar microservicios:
- Todos los servicios son prescindibles:

   La principal ventaja técnica de tener cada servicio viviendo en su propio contexto de aplicación es
   que los bloqueos, errores y cambios de interrupción no se propagan a todo el sistema.
   
   El objetivo es para construir servicios verdaderamente independientes que sean más pequeños, más fáciles de
   cambiar o incluso reconstruir a partir de errores.

- Reutilización en plataformas y lenguajes:

   Dividir una gran aplicación monolítica en muchos servicios pequeños nos permite crear
   unidades independientes que se pueden reutilizar mucho más fácilmente.
      
   La principal ventaja es que el nivel de ocultamiento de información suele ser mucho mayor
   en comparación con aplicaciones monolíticas. Esto es posible porque las interacciones generalmente
   pasar a través de una interfaz remota, como un servicio web o un intermediario de mensajes, lo que hace
   es mucho más fácil ocultar los detalles de implementación y proteger al cliente de los cambios en el
   forma en que se implementa o implementa el servicio

- Una forma de escalar la aplicación.
