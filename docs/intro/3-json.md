# Introducción a JSON

**JSON** (JavaScript Object Notation) o notación de objetos de JavaScript es un formato ligero y legible para estructurar datos. su uso principal es transmitir datos del servidor al cliente como alternativa al XML.

Un JSON es una cadena cuyo formato se parece mucho al formato literal de objetos JavaScript. Asigna **claves** **a** **los** **valores**.
**Por** **ejemplo**:

```js
{
    "firstname": "David",
    "lastname": "Smith",
    "age": "42"
}
```

En el JSON anterior, el Key "nombre" se asigna al valor "David". El **key** siempre es una cadena entre comillas. El **value** puede ser cualquier cosa: una cadena, número, booleano, matriz u objeto. Los pares key/value están separados por comas.

El objeto JSON comienza y termina con llaves { }. También puede tener un objeto JSON como value para un key.
**Por** **ejemplo**:

```js
{
    "registered": "2016-1-10",
    "courses": ["JS","C++","Python"],
    "active": true,
    "id": 01234,
    "age": null,
    "activity":{
        "challenges": 10,
        "friends": 24,
        "last_activity": 1500646159
    }
}
```

En el código anterior, el key **"activity"** contiene otro objeto JSON.

JSON es más legible y más liviano en comparación con XML.
Veamos cómo se verían los mismos datos del ejemplo anterior pero ahora en XML.

```js
<?xml version="1.0" encoding="UTF-8">
<user>
   <registered>2016-1-10</registered>
   <courses>
       <course>JS</course>
       <course>C++</course>
       <course>Python</course>
   </courses>
   <active>true</active>
   <id>01234</id>
   <age/>
   <activity>
       <challenges>10</challenges>
       <friends>24</friends>
       <last_activity>1500646159</last_activity>
   </activity>
</user>
```

Como puede ver, JSON es claramente mejor en términos de legibilidad y longitud.

:::tip
JSON requiere el uso de comillas dobles y nombres de propiedades: las comillas simples no son válidas. Recuerde, JSON es solo formato de datos. Muchos lenguajes de programación admiten el análisis y el uso de JSON.