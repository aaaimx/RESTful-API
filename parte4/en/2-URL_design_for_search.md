# URL Design for Search

If your API is providing a search, then you need to build a robust system to handle all types of search queries. In the case of simple searches, the query could simply be:

```
http://api.example.com/users/?q=male

```

But in the case of complex searches, you need to consider **global** and **scoped** search URIs to handle the search properly.

If you want to do a global search across all your resources, then the following model is recommended, where the **?q** indicates the query.

```
http://api.example.com/search?q=new+web+codes

```

In the case of a **specific search** on a resource, you should prepend it with the search query.

```
http://api.example.com/users?q=pending+lessons

```

> We’ve dropped the explicit "/search" in the URI and are relying on the parameter ?q to indicate the scoped query.