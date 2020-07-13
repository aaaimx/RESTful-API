# Consistencia de nombramiento

Existen algunas reglas generales que te ayudaran a manetener tu REST API consistente y mantenible.

**Siempre usa el slash (/) para separar las porciones de tus secciones.**

El siguiente caracteristica del slash definira la relación jerárquica de los recursos.

> http://api.example.com/users/{id}/posts

**Nunca use la barra diagonal**

Las barras diagonales no hacen nada y pueden ser confusas. Es mejor dejarlas completamente.

> http://api.example.com/users/{id}/posts/  /*Bad*/

> http://api.example.com/users/{id}/posts  /*Good*/

**Los guiones (-) son buena elección para separar palabras.**

Los guiones ayudan a los usuarios a escanear y leer rápidamente, especialmente en los nombres de los URI.

> http://api.example.com/users/accessLevels  /*Bad*/

> http://api.example.com/users/access-levels  /*Good*/

Es posible utilizar guiones bajos en vez de los guiones, pero en algunos casos (basados en los fondos de los sistemas) no son claramente visibles y son inaceptables en los URIs

**Usando siempre letras minúsculas en los caminos URI siempre es preferible. Sin embargo, el componente host puede estar en mayúsculas.**

> http://api.example.org/home/my-file

> HTTP://API.EXAMPLE.ORG/home/my-file

> http://api.example.org/Home/My-File

En el ejemplo de arriba, las tres son el mismo API, pero la tercera puede ocasionar prolemas por la implementación y el tipo de servidor.

**Nunca use extenciones de archivos.**

Se ven mal en los URIs y solo los hacen más largos.

Utilice otro tipo de metodos para determinar  el tipo de archivo; no te confies de las extensiones.

> http://api.example.com/files/license.pdf  /*Bad*/

> http://api.example.com/files/license /*Good*/

**Siempre use los componentes de consulta para filtrar la colección de URI.**

Use los componentes de consulta (?, &) para ordenar, o de otros parametros a su URI. Nunca cree un nuevo URI para archivarlo.

> http://api.example.com/projects/{id}/run?lang=cpp

> http://api.example.com/projects/{id}/run?lang=cpp&type=gcc

**Nunca use las funciones de nombre CRUD**

Nada en la URI debería indicar que acción se esta ejecutando.

> GET http://api.example.com/users/  //Get all users

> POST http://api.example.com/users/  //Create new user

> GET http://api.example.com/users/{id}  //Get the user with Id

> PUT http://api.example.com/users/{id}  //Update the user with Id

> DELETE http://api.example.com/users/{id}  //Delete the user with Id
