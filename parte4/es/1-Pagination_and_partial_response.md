# Paginación y respuesta parcial.

La idea aquí no es devolver todos los recursos en la base de datos. Su API debe tener la agilidad suficiente para permitir que el usuario personalice la solicitud con parámetros opcionales para obtener exactamente lo que necesita, tanto en términos de tipos como de cantidad.

Esto es especialmente importante en aplicaciones móviles, donde el ancho de banda y los recursos son limitados.

## Respuesta parcial

Para realizar una consulta, tome solo los parámetros especificados, use campos de consulta opcionales. Usar una lista de campos delimitada por comas es común. Por ejemplo, creemos una consulta que solo tome el nombre del usuario, el estado y el avatar.

```
http://api.example.com/users?fields=name,status,avatar

```

En este caso, solo devuelve 3 parámetros de la colección del usuario. Sin embargo, en ausencia de los campos, puede devolver más de 100 parámetros, lo cual es innecesario para nosotros si solo vamos a enumerar a todos los usuarios.

## Paginación

Imagine que desea obtener un recurso de colección que tiene más de un millón de entradas. Es una mala idea buscar todo de una vez, ya que el usuario solo puede ver 10-20 entradas en sus dispositivos. **Paginación** puede resolver este problema.
Hay dos parámetros para esto: **offset** y **limit**.
 - desplazamiento identifica desde qué entrada debe comenzar la recuperación
 - límite identifica cuántas entradas deben devolverse, comenzando desde el desplazamiento

Entonces, para obtener 20 entradas por solicitud, la consulta debería ser como:

```
http://api.example.com/users?offset=0&limit=20
http://api.example.com/users?offset=20&limit=20
...

```

> Es una buena práctica establecer un límite y un desplazamiento predeterminados para los URI de su colección, por lo que si no se especifican el límite y el desplazamiento, no se colocará una carga pesada en el servidor. Por ejemplo, puede establecer el límite predeterminado en 10 y establecer el desplazamiento en 0.