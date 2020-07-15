# Update Operation (PUT)

The **PUT APIs** are primarily used **to update an existing resource** (if the resource does not exist, then the API may decide to create a new resource or not). 

If a new resource has been created by the **PUT API**, the server must inform the user agent via the HTTP response code **201 (Created)**, and if an existing resource is modified, either the **200 (OK)** or **204 (No Content)** response code should be sent to indicate successful completion of the request.

If the request passes through a cache and the Request URI identifies one or more currently cached entities, those entries should be treated as stale. Responses to this method are **not cacheable.**

**Examples: **

> HTTP PUT http://www.appdomain.com/users/48848

> HTTP PUT http://www.appdomain.com/users/48848/accounts/2744 