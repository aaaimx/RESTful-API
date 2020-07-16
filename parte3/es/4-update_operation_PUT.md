# Operación de actualización (PUT)

El **PUT APIs** es primeramente utilizados para **actualizar un recurso existente** (si el recurso no existe, entonces el API debe decidir si crear un nuevo recurso o no.)

Si un nuevo recurso es creado por el **PUT API**, el servidor debe informar al usuario por medio de un codigo de respuesta HTTP **201 (Created)**, y si si un recurso existente es modificado, también los codigos de respuesta **200 (OK)** o **204 (No content)** deberían de enviarse para indicar exito en la solicitud.

Si la solicitud pasa atravez del cache y la solicitud del URI idetifica una o más entradas actuales del cache, aquellas entradas deben tratarse como obsoletas. 

Las respuestas de este metodo **no son cacheables**

**Ejemplos**

> HTTP PUT http://www.appdomain.com/users/48848

> HTTP PUT http://www.appdomain.com/users/48848/accounts/2744
