# NodeJS-Arquitectura-Escalabilidad

En este repositorio voy a volcar el contenido y teoria del libro Nodejs patrones de diseño, **2da edición**.

![N|Solid](http://damiancipolat.com/webFiles/portada-libro-node-1.png)

Cuando se habla de escalabilidad, el primer principio fundamental que se debe entender es la carga distribución, la ciencia de dividir la carga de una aplicación en varios procesos y máquinas. Hay muchas maneras de lograr esto, y el libro The Art of Scalability by Martin
L. Abbott y Michael T. Fisher propone un modelo ingenioso para representarlos, llamado cubo de escala.

Este modelo describe la escalabilidad en términos de las siguientes tres dimensiones:

![N|Solid](http://damiancipolat.com/webFiles/arq-esq-node.png)

- **x-axis**: Clonación
- **y-axis**: Descomposición por servicio y funcionalidad.
- **z-axis**: Separando por partición de datos.

## MONOLITICO:
La **esquina inferior izquierda** del cubo representa las aplicaciones que tienen todas sus funcionalidades y servicios en una única base de código (aplicaciones monolíticas) y ejecutándose en una sola instancia. Esta es una situación común para aplicaciones que manejan cargas de trabajo pequeñas o en etapas tempranas de desarrollo.

## CONCURRENCIA:
La evolución más intuitiva de una aplicación monolítica y sin escala se mueve a lo largo del **eje x**, que es simple, la mayoría de las veces es económico (en términos de costo de desarrollo) y muy efectivo. El principio detrás de esta técnica es elemental, es decir, la clonación de la misma aplicación N veces y dejando que cada instancia maneje 1 / nth de la carga de trabajo.

## MICROSERVICIOS:
Escalar a lo largo del **eje y** significa descomponer la aplicación en función de sus funcionalidades, servicios o casos de uso. En este caso, la descomposición significa crear diferentes, independientes aplicaciones, cada una con su propia base de código, a veces con su propia base de datos dedicada, o incluso con una IU separada.

Ejemplos separación por servicios:
- Separar la parte de un aplicación responsable de la administración del producto público.
- Extrayendo los servicios responsables de la autenticación del usuario, creando un servidor de autenticación.
- Los criterios para dividir una aplicación por sus funcionalidades dependen principalmente en sus requisitos comerciales, los casos de uso, los datos y muchos otros factores, como Veremos más adelante en este capítulo. 

## SHARDING (particionado)
La última dimensión de escalado es el **eje z**, donde la aplicación se divide de tal manera que cada instancia es responsable de solo una parte de los datos completos. Esta es una técnica principalmente utilizado en bases de datos y también toma el nombre de partición horizontal o sharding. 

En esta configuración, hay múltiples instancias de la misma aplicación, cada uno de ellos operando en una partición de los datos, que se determina usando diferentes criterios.

Ejemplos:




