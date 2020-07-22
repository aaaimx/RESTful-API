# Pagination and Partial Response

The idea here is not to return every resource in the database. Your API should have enough agility to let the user customize the request with optional parameters to get exactly what they need, both in terms of types and amount.

This is especially important in mobile apps, where bandwidth and resources are limited.

## Partial Response

To make a query take only specified parameters, use optional query fields. Using a comma-delimited list of fields is common. For example, let's build a query that will only take the user's name, status, and the avatar.

```
http://api.example.com/users?fields=name,status,avatar

```

In this case, it only returns 3 parameters of the user's collection. However, in the absence of the fields, it may return more than 100 parameters, which is unnecessary for us if we are just going to list all the users.

## Pagination

Imagine you want to fetch a collection resource which has more than a million entries. It is a bad idea to fetch all at once, as the user can only see 10-20 entries on their devices. **Pagination** can solve this problem.
There are two parameters for this: **offset** and **limit**.
 - offset identifies from which entry the fetching should start
 - limit identifies how many entries should be returned, starting from the offset

So, to get 20 entries per request the query should be like:

```
http://api.example.com/users?offset=0&limit=20
http://api.example.com/users?offset=20&limit=20
...

```

> It is good practice to set a default limit and offset for your collection URIs, so if the limit and offset are not specified, there will not be a heavy load put on the server. For example, you can set the default limit to 10 and set the offset to 0.