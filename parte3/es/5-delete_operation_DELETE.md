# Borrar operación (DELETE)

**Borrar** una operación se utiliza para eliminar un recurso identificado por un URI.

Una eliminación exitosa, regresaun codigo de estado HTTP **200 (OK)**, junto con la respuesta, quizas la representación del item eliminado (a veces demanda mucho bandwidth), o una respuesta envuelta. Alternativamente, regresa un estatus HTTP 204 (NO CONTENT) sin cuerpo de respuesta.

Las operaciones **borrar** son **idempotentes**. Si **borras** un recurso, se elimina.

Llamar repetidamente **DELETE** en ese recurso termina igual; el recurso se va.

Por ejemplo, si llamar **DELETE** decrementa un contador (dentro de un recurso) la llamada **borrar** no será más idemponente. El uso de estadisticas y mediciones se podrá actualizar mientras se siga considerando el servicio idemponente mientras ningún dato del recurso sea cambiado. Es recomendado utilizar **POST** para las solicitudes de recursos no idemponentes.

**Ejemplos**

> DELETE http://www.example.com/users/11111

> DELETE http://www.example.com/users/11111/posts/222