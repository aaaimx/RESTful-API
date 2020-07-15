# Delete Operation (DELETE)

The **DELETE** operation is used to delete a resource identified by a URI.

On successful deletion, return HTTP status **200 (OK)**, along with a response body, perhaps the representation of the deleted item (often demands too much bandwidth), or a wrapped response. Alternatively, return HTTP status 204 (NO CONTENT) with no response body.

**DELETE** operations are **idempotent.** If you **DELETE** a resource, it is removed. 
Repeatedly calling **DELETE** on that resource ends up the same: the resource is gone.
For example, if calling **DELETE** decrements a counter (within the resource), the **DELETE** call is no longer idempotent. The usage statistics and measurements may be updated while still considering the service idempotent as long as no resource data is changed. Using **POST** for non-idempotent resource requests is recommended.

**Examples:** 

> DELETE https://www.example.com/users/11111

> DELETE http://www.example.com/users/11111/posts/222 