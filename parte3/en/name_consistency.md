# Naming Consistency

There are some more general rules that will help you to keep your REST API consistent and maintainable.

**Always use slash (/) to separate your path portions**

The forward slash character defines the hierarchical relationship between the resources.

> http://api.example.com/users/{id}/posts


Never use trailing slash (/)
Trailing slashes do nothing and may be confusing. It is better to drop them completely.

> http://api.example.com/users/{id}/posts/  /*Bad*/

> http://api.example.com/users/{id}/posts  /*Good*/


**Hyphens (-) are good choices to separate words**

Hyphens help users scan and read faster, especially in long URI names. 

> http://api.example.com/users/accessLevels  /*Bad*/

> http://api.example.com/users/access-levels  /*Good*/


It is possible to use underscores instead of hyphens, but in some cases (based on system font) they are not clearly visible and not acceptable in URIs.

**Always use lowercase letters**

Using lowercase letters in URI paths is always preferred. However, the host component can be in capital letters.

> http://api.example.org/home/my-file
> HTTP://API.EXAMPLE.ORG/home/my-file
> http://api.example.org/Home/My-File


In the example above, all three are the same API, but the third one can cause problems based the implementation and type of the server.

**Never use file extensions**

They look bad in URIs and make them longer. 

Use other methods to determine the file type; do not rely on the extension. 

> http://api.example.com/files/license.pdf  /*Bad*/
> http://api.example.com/files/license /*Good*/


**Always use query component to filter URI collection**

Use query components (?, &) to sort, paginate, or give any other parameters to your URI. Never create a new URI to achieve that.

> http://api.example.com/projects/{id}/run?lang=cpp
> http://api.example.com/projects/{id}/run?lang=cpp&type=gcc


**Never use CRUD function names**

Nothing in the URI should indicate what action it is performing. 

> GET http://api.example.com/users/  //Get all users

> POST http://api.example.com/users/  //Create new user

> GET http://api.example.com/users/{id}  //Get the user with Id

> PUT http://api.example.com/users/{id}  //Update the user with Id

> DELETE http://api.example.com/users/{id}  //Delete the user with Id
