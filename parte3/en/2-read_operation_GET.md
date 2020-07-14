 #Read Operation (GET)

**GET** requests are used **to retrieve resource representation/information only,** not to edit it in any way. 
As **GET** requests do not change the state of the resource, these requests are known as **safe methods**. Additionally, **GET APIs** should be **idempotent,** which means that making multiple identical requests must produce the same result every time until another API (POST or PUT) has changed the state of the resource on the server.

For any given HTTP **GET** request, if a resource is found on the server, it must return **HTTP response code 200 (OK)** - along with response body which is usually either XML or JSON content (due to their platform-independent nature).

In case a resource is NOT found on the server it must return HTTP response code **404 (NOT FOUND).** 
Similarly, if it is determined that the **GET** request itself is not correctly formed then the server will return HTTP response code **400 (BAD REQUEST).**

**Examples:**

> GET http://www.test.com/posts

> GET http://www.test.com/posts/36273