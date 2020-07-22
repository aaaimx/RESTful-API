#  Versionando API

Antes de liberar tu REST API, deberias considerar el cómo manejar las **versiones**, porque no tienes garantia de que todos tus usuarios manejaran las versiones actualizadas del API.

Por ejemplo, imagina que publicas una app en la play store con un API (**v1**). En el siguiente lanzamiento de tu API (**v2**) la cual usaras en tu sitio web, cambias una de las llamadas URI y la respuesta del formato. Entonces si no es compatible con las nuevas versiones, tu aplicación va a crashear hasta que actualices la app con la nueva versión de la API.

Ahora que sabes las razones detras del versionado, veamos como se debería realizar.

La manera más común de versionar un API es incluir el **número de versión** in cada **URL**. Por ejemplo:

> http://api.example.com/v1/users/

> http://api.example/v2.1/users/{id}/projects/{id}/run

De esta manera la estructura y las vesiones son correctas en la URL, y es fácil de usar.

El otro enfoque es incluir la versión en el **encabezado del HTTP**. Si usas este enfoque, deberias ser capaz de manejar la solicitud donde la versión se pierde y no esta visible en la URL.

> Existen otros tipos de enfoques donde el versionado es opcional, y si una versión no esta especificada, obtendrá automaticamente la ultima versión.

> El inconveniente de estos enfoques es que los desarrolladores deben actuar inmediatamente a actualizar las apps para no romper la experiencia.

Otra manera para versionar la API es manejar por separado cada plataforma. Digamos que tienes Android, IOS, y aplicaciones web y se comportan diferente. Tu puedes crear diferentes versiones del API para optimizar cada plataforma por separado:

> http://api.example.com/a-v5/codes/{id}

> http://api.example.com/i-v4/codes/{id}

> http://api.example.com/w-v16/codes/{id}