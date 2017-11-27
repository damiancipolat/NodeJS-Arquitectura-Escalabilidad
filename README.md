# NodeJS-Arquitectura-Escalabilidad

En este repositorio voy a volcar el contenido y teoria del libro Nodejs patrones de diseño, 2da edición.

![N|Solid](http://damiancipolat.com/webFiles/portada-libro-node-1.png)

Cuando se habla de escalabilidad, el primer principio fundamental que se debe entender es la carga distribución, la ciencia de dividir la carga de una aplicación en varios procesos y máquinas. Hay muchas maneras de lograr esto, y el libro The Art of Scalability by Martin
L. Abbott y Michael T. Fisher propone un modelo ingenioso para representarlos, llamado cubo de escala.

Este modelo describe la escalabilidad en términos de las siguientes tres dimensiones:

![N|Solid](http://damiancipolat.com/webFiles/arq-esq-node.png)

- **x-axis**: Cloning
- **y-axis**: Decomposing by service/functionality
- **z-axis**: Splitting by data partition


La esquina inferior izquierda del cubo representa las aplicaciones que tienen todas sus funcionalidades
y servicios en una única base de código (aplicaciones monolíticas) y ejecutándose en una sola instancia.
Esta es una situación común para aplicaciones que manejan cargas de trabajo pequeñas o en etapas tempranas
de desarrollo.


La evolución más intuitiva de una aplicación monolítica y sin escala se mueve a lo largo del
eje x, que es simple, la mayoría de las veces es económico (en términos de costo de desarrollo) y
muy efectivo. El principio detrás de esta técnica es elemental, es decir, la clonación de la misma
aplicación n veces y dejando que cada instancia maneje 1 / nth de la carga de trabajo.


Escalar a lo largo del eje y significa descomponer la aplicación en función de sus funcionalidades,
servicios o casos de uso. En este caso, la descomposición significa crear diferentes, independientes
aplicaciones, cada una con su propia base de código, a veces con su propia base de datos dedicada, o
incluso con una IU separada. Por ejemplo, una situación común es separar la parte de un
aplicación responsable de la administración del producto público. Otro
ejemplo está extrayendo los servicios responsables de la autenticación del usuario, creando un
servidor de autenticación. Los criterios para dividir una aplicación por sus funcionalidades dependen
principalmente en sus requisitos comerciales, los casos de uso, los datos y muchos otros factores, como
Veremos más adelante en este capítulo. Curiosamente, esta es la dimensión de escalado con la mayor
repercusiones, no solo en la arquitectura de una aplicación, sino también en la forma en que
manejado desde una perspectiva de desarrollo. Como veremos, microservicio es un término que al
momento se asocia más comúnmente con una escala de eje y de grano fino.


La última dimensión de escalado es el eje z, donde la aplicación se divide de tal manera que
cada instancia es responsable de solo una parte de los datos completos. Esta es una técnica principalmente
utilizado en bases de datos y también toma el nombre de partición horizontal o sharding. En esto
configuración, hay varias instancias de la misma aplicación, cada una de ellas operando en un
partición de los datos, que se determina utilizando diferentes criterios. Por ejemplo, podríamos
particionar a los usuarios de una aplicación en función de su país (partición de lista), o en función del
letra de inicio de su apellido (partición de rango), o dejando que una función de hash decida el
partición a la que pertenece cada usuario (partición hash). Cada partición se puede asignar a un
instancia particular de nuestra aplicación. El uso de particiones de datos requiere que cada operación
ir precedido de un paso de búsqueda para determinar qué instancia de la aplicación es responsable
para un dato dado. Como dijimos, la partición de datos generalmente se aplica y se maneja en el
nivel de base de datos porque su objetivo principal es superar los problemas relacionados con el manejo
grandes conjuntos de datos monolíticos (espacio de disco limitado, memoria y capacidad de red). Aplicandolo
en el nivel de aplicación vale la pena considerar solo para arquitecturas complejas o distribuidas
para casos de uso muy particulares como, por ejemplo, al crear aplicaciones que dependen de la costumbre
soluciones para la persistencia de datos, cuando se utilizan bases de datos que no admiten partición, o cuando
creación de aplicaciones en Google scale. Teniendo en cuenta su complejidad, escalar una aplicación
a lo largo del eje z se debe tener en cuenta solo después de los ejes xey de la escala
cubo ha sido explotado al máximo
