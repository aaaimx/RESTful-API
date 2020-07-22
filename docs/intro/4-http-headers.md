# HTTP Headers (cabeceras)
Los **headers** **HTTP** son partes importantes de los mensajes HTTP, ya que transmiten información adicional junto con el cuerpo del mensaje. Un header HTTP consiste en un **nombre** seguido de dos puntos':', luego por su valor. El nombre no distingue entre mayúsculas y minúsculas. En el ejemplo a continuación, "Tipo de contenido"(**Content-Type**) es el nombre del header y su valor es **"image/png"**.

```
Content-Type: image/png
```
No hay saltos de línea entre el nombre y el valor del header.

Normalmente, cuando se trabaja con los sitios web, se envían dos tipos de headers: Solicitud y Respuesta (**Request and Response**). Los headers de solicitud consisten en datos sobre lo que el cliente desea recibir y sobre el cliente mismo. Los headers de respuesta proporcionan más información sobre el recurso que se envía, incluida  la información como el nombre del servidor, la ubicación, la versión, etc.

Por ejemplo, un **header** de tipo **request** puede verse así:

```
GET /file.html HTTP/version
Host:  HostName
From: NameOfRequestingUser
Cache-Control: no-cache
```
La línea de inicio (**start line**) describe el mensaje, lo que significa que el servidor debe responder a una **GET** **request** para el resourse(recurso) **/file.html Host**, **From** y **Cache-Control** son headers de muestra.

:::tip
Hay más de 60 nombres de headers predeterminados y puede crear cualquier header personalizado utilizando caracteres alfabéticos o numéricos.