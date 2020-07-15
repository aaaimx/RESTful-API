# Crear Operación (POST)

**La POST** operación se usa **para crear nuevos recursos subordinados.**

En terminos de REST, los metodos **POST** son utilizados para crear nuevos recursos en la colección de recursos.

**El paso de datos** junto con el POST solicitud se hace usando el **cuerpo** del mensaje HTTP.

Idealmente, si un recurso se ha creado en el servidor de origen, la respuesta debería ser el codigo HTTP **201 (Created)** y contiene una entidad la cual describe el estado de la solicitud y se refiere al nuevo recurso.

Algunas veces, la acción realizada por el método **POST** puede no resultar en en un recurso que sea identificado por un URI. En ese caso, cualquiera de las respuestas del codigo HTTP **200 (OK) o 204 (No Content)** son una respuesta apropiada de estatus.

Las respuestas de este método no son **Cachebales** a no ser que la respuesta incluya un apropiado **Cache-control** o **expirados** encabezados.

Por ejemplo, una **POST** solicitud para el siguiente punto final del API crea un "item" en la colección de "items". Se pasan parametros adicionales a lo largo de el cuerpo del mensaje.

> http://example.com/items 