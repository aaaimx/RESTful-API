# Restricción de Arquitecturas REST

**REST** (Representación de Transferencia de estados) aboga por que las aplicaciones web deberían usar **HTTP** como se concibió originalmente. Las búsquedas deben usar solicitudes GET. Las solicitudes PUT, POST y DELETE deben usarse para mutaciones, creaciones y eliminaciones respectivamente.

REST permite la evolución independiente de la aplicación sin tener los servicios, modelos o acciones de la aplicación **estrechamente** **vinculados** a la capa de la API en sí.

Esta interfaz uniforme debe proporcionar un medio **inmutable** y **estandarizado** de comunicación entre el cliente y el servidor, como el uso de **HTTP con recursos URI**, **CRUD** (Create, Read, Update, Delete) y **JSON.**

Mientras diseña la API REST, intente que todas las interacciones cliente-servidor **no tengan estado**. El servidor no debe almacenar nada sobre el último cliente de solicitud HTTP realizado. Debe tratar **cada solicitud como nueva**. Si la aplicación cliente necesita mantener estados para un usuario final, entonces cada solicitud debe contener toda la información necesaria para atender la solicitud (**incluidos los detalles de autenticación y autorización**).

>Debido a que una API sin estado puede aumentar la sobrecarga de la solicitud al manejar grandes cargas de llamadas entrantes y salientes, una API REST debe diseñarse para alentar el almacenamiento de **datos almacenables en caché**.