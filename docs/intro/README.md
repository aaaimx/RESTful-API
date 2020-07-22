# ¿Que es una RESTful API?

Una **RESTful API** (RESTful web service), está basado en la tecnología de represetación de transferencia de estados (REST), el cual es un estilo arquitectónico y un acercamiento a comunicaciones de uso frecuente en el desarrollo de servicios web.

Una RESTful API se utiliza principalmente para una API web [**HTTP**](2-http.md) donde no hay necesidad de instalar bibliotecas o paquetes adicionales.

REST en sí es muy **flexible**. No hay muchas limitaciones, pero los desarrolladores se refieren a las mejores prácticas al archivar una API REST. REST tiene la capacidad de manejar múltiples tipos de solicitudes y devolver diferentes tipos de datos (como [JSON](3-json.md) y XML).

Por ejemplo, una **solicitud** **GET** al siguiente punto final de la API de Facebook Graph responde con la información del usuario.


> http://graph.facebook.com/v3.0/{user-id}


Como otro ejemplo, La solicitud del **API** de Google **Geocoding** que toma la siguiente forma:


> http://maps.googleapis.com/maps/api/geocode/json


Es importante diseñar una **API** **intuitiva** **y** **conveniente**. Solicitar a las URL de la API y los métodos HTTP, como GET, POST, PUT o DETELE.

:::warning NOTA
 Roy Thomas Fielding es un científico en computación estadounidense, que definió el diseño de las REST API en su tesis de doctorado en el año 2000.
