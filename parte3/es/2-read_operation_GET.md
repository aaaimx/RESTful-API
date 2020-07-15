# Operación de lectura (GET)

Las solicitudes **GEt** son utilizadas para recibir la representación de recursos/solo información, no para editar en cualquier manera.

Como las solicitudes **GET** no cambian el estado del recurso, estas solicitudes son conocidas como **metodos seguros**. Adicionalmente, **GET APIs** debería ser idempotente, lo que significa que la creación de multiples solicitudes identicas deben roducir el mismo resultado cada vez hasta que otro API (POST or PUT) haya cambiado el estado del recurso en el servidor.

Para cualquier HTTP solicitud **GET** dada, si un recurso es encontrado en el servidor, este debe regresar al **HTTP response code 200 (OK)**- junto con el cuerpo de la respuesta el cual generalmente es contenido XML o JSON (debido a la plataforma independientemente de la naturaleza).

En caso de de que un recurso NO sea encontrado en el servidor este debe regresar con una respuesta de codigo HTTP **404 (NOT FOUND)**

Similarmente, si se determina que la misma solicitud **GET** no esta correctamente formada entonces el servidor regresara un codigo de respuesta HTTP **400 (BAD REQUEST**).

**Ejemplos**

> GET http://www.test.com/posts

> GET http://www.test.com/posts/36273