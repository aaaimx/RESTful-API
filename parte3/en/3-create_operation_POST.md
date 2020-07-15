# Create Operation (POST)

**The POST** operation is used **to create new subordinate resources.**

In terms of REST, **POST** methods are used to create a new resource in the collection of resources. 
**Passing data** along with the POST request is done using the HTTP message **body.**

Ideally, if a resource has been created on the origin server, the response should be HTTP response code **201 (Created)** and contain an entity which describes the status of the request and refers to the new resource.

Many times, the action performed by the **POST** method might not result in a resource that can be identified by a URI. In that case, either HTTP response code **200 (OK)** or **204 (No Content)** is an appropriate response status.

Responses to this method are **not cacheable** unless the response includes appropriate **Cache-Control** or **Expires** header fields.

For example, a POST request to the following API endpoint creates a new "item" in the collection "items". Additional parameters are passed along with the message body. 

> http://example.com/items 