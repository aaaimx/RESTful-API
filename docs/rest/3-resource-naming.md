# Nomenclatura de recursos
Es importante seguir las **convenciones de nomenclatura** para que su API REST se vea profesional, legible y fácil de usar. Debe tratar los recursos como una **cosa (sustantivo)** en lugar de una **acción (verbo)**. La razón principal es que los sustantivos tienen propiedades pero los verbos no. Veamos algunos ejemplos de recursos:

```
http://api.example.com/users/
http://api.example.com/users/{id}
```
>Use sustantivos en lugar de verbos para representar recursos.


Para simplificar esto aún más, analicemos 4 tipos diferentes de recursos, que lo ayudarán a elegir una convención de nomenclatura correcta para su API.

##### Document
Este tipo de recurso es un concepto singular (objeto). En REST API, puede verlo (obtenerlo) como un único recurso dentro de la colección. Utilice el nombre "singular" para implicar el tipo de recurso del **documento**.

```
http://api.example.com/users/{id}
http;//api.example.com/users/{id}/posts
```
##### Store
Un recurso de store es un directorio en el que un usuario (cliente) decide cuándo agregar o quitar desde allí. Utilice un nombre "plural" para implicar un tipo de recurso de store.

```
http://api.example.com/users/{id}/projects
http;//api.example.com/users/{id}/playlists
```
#### Controller
Un recurso controlador es un concepto de acción. Los recursos del controlador actúan como funciones que pueden tomar parámetros como entrada y devolver una salida. Use un "verbo" para implicar un tipo de recurso **controlador**.
```
http://api.example.com/users/{id}/projects/run
http;//api.example.com/users/{id}/playlists/play
```

>Siga las mejores prácticas para diseñar una API fácil de usar.