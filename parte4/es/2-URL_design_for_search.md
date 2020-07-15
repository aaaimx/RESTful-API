# Diseño de URL para búsqueda

Si su API está proporcionando una búsqueda, entonces necesita construir un sistema robusto para manejar todo tipo de consultas de búsqueda. En el caso de búsquedas simples, la consulta podría ser simplemente:

```
http://api.example.com/users/?q=male

```

Pero en el caso de búsquedas complejas, debe considerar los URI de búsqueda **globales** y **con alcance** para manejar la búsqueda correctamente.

Si desea realizar una búsqueda global en todos sus recursos, se recomienda el siguiente modelo, donde **?q** indica la consulta.

```
http://api.example.com/search?q=new+web+codes

```

En el caso de una **búsqueda específica** en un recurso, debe anteponerlo con la consulta de búsqueda.

```
http://api.example.com/users?q=pending+lessons

```

> Hemos eliminado la "/búsqueda" explícita en el URL y confiamos en el parámetro ?q para indicar la consulta de alcance.