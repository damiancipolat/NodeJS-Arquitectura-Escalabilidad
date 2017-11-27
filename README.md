# NodeJS-Arquitectura-Escalabilidad

En este repositorio voy a volcar el contenido y teoria del libro Nodejs patrones de diseño, 2da edición.

![N|Solid](http://damiancipolat.com/webFiles/portada-libro-node-1.png)

Cuando se habla de escalabilidad, el primer principio fundamental que se debe entender es la carga distribución, la ciencia de dividir la carga de una aplicación en varios procesos y máquinas. Hay muchas maneras de lograr esto, y el libro The Art of Scalability by Martin
L. Abbott y Michael T. Fisher propone un modelo ingenioso para representarlos, llamado cubo de escala. Este modelo describe la escalabilidad en términos de las siguientes tres dimensiones:

![N|Solid](http://damiancipolat.com/webFiles/arq-esc-node.png)

- **x-axis**: Cloning
- **y-axis**: Decomposing by service/functionality
- **z-axis**: Splitting by data partition
