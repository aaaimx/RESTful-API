# API Versioning

Before releasing your REST API, you should also consider how to handle **versioning**, because you can not guarantee that all of your users will always use the latest version of the API. 

For example, imagine that you published an app in the app store with an API (**v1**). In the next release of your API (**v2**) which will be used in your website, you changed one of the URI calls and the response format. So if you do not support versioning, your app will crash until you update your app with the new API version.

Now that you know the reason behind the versioning, let's see how it should be done.
The most common way of versioning an API is to include the **version number** in every **URL**. For example:

> http://api.example.com/v1/users/ 

> http://api.example.com/v2.1/users/{id}/projects/{id}/run

This way the structure and the version are correct in the URI, and it is simple to use.

The other approach is to include the version in the **HTTP Header**. If you use this approach, you should still be able to handle the request where the version is missing and is not visible in the URI itself.

> There are other types of approaches where the versioning is optional, and if a version is not specified, it will automatically get the latest version. The drawback of these approaches is that the developers should act immediately to update the apps in order not to break the experience.

Another way to version your API is to handle each platform separately. Let's say you have Android, iOS, and Web apps and they behave differently. You may create different versions for your API to optimize for each platform separately:

> http://api.example.com/a-v5/codes/{id}

> http://api.example.com/i-v4/codes/{id}

> http://api.example.com/w-v16/codes/{id} 

> Platform management is usually handled by using the HTTP headers.