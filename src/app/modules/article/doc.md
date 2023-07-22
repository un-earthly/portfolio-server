Article CRUD API Documentation
==============================

Overview
--------

This API allows users to perform CRUD (Create, Read, Update, Delete) operations on articles. Articles are stored in a MongoDB database and can be accessed using RESTful endpoints.

Base URL: `/api/v2`

Endpoints
---------

### 1\. Create an Article

URL: `/articles`

Method: `POST`

Request Body:



```{
    "title": "Sample Article",
    "content": "<p>This is the content of the article in HTML format.</p>"
}
```



Response:

```{
    "_id": "6144b87bc1e3e7734f543e37",
    "title": "Sample Article",
    "content": "<p>This is the content of the article in HTML format.</p>",
    "createdAt": "2021-09-17T12:00:00.000Z",
    "updatedAt": "2021-09-17T12:00:00.000Z"
}
```



### 2\. Get All Articles

URL: `/articles`

Method: `GET`

Response:



```[
    {
        "_id": "6144b87bc1e3e7734f543e37",
        "title": "Sample Article",
        "content": "<p>This is the content of the article in HTML format.</p>",
        "createdAt": "2021-09-17T12:00:00.000Z",
        "updatedAt": "2021-09-17T12:00:00.000Z"
    },
    {
        "_id": "6144b8a1c1e3e7734f543e38",
        "title": "Another Article",
        "content": "<p>This is another article's content in HTML format.</p>",
        "createdAt": "2021-09-17T12:05:00.000Z",
        "updatedAt": "2021-09-17T12:05:00.000Z"
    }
]
```


### 3\. Get an Article by ID

URL: `/articles/:id`

Method: `GET`

Response:


```{
    "_id": "6144b87bc1e3e7734f543e37",
    "title": "Sample Article",
    "content": "<p>This is the content of the article in HTML format.</p>",
    "createdAt": "2021-09-17T12:00:00.000Z",
    "updatedAt": "2021-09-17T12:00:00.000Z"
}
```


### 4\. Update an Article

URL: `/articles/:id`

Method: `PUT`

Request Body:



```{
    "title": "Updated Article",
    "content": "<p>This is the updated content of the article in HTML format.</p>"
}
```


Response:



```{
    "_id": "6144b87bc1e3e7734f543e37",
    "title": "Updated Article",
    "content": "<p>This is the updated content of the article in HTML format.</p>",
    "createdAt": "2021-09-17T12:00:00.000Z",
    "updatedAt": "2021-09-17T13:00:00.000Z"
}
```



### 5\. Delete an Article

URL: `/articles/:id`

Method: `DELETE`

Response:



```{
    "_id": "6144b87bc1e3e7734f543e37",
    "title": "Sample Article",
    "content": "<p>This is the content of the article in HTML format.</p>",
    "createdAt": "2021-09-17T12:00:00.000Z",
    "updatedAt": "2021-09-17T12:00:00.000Z"
}
```



Error Handling
--------------

The API returns appropriate error responses with status codes and error messages in case of any issues. Possible error responses include:

-   400 Bad Request: Invalid request or missing required parameters.
-   404 Not Found: The requested article with the given ID does not exist.
-   500 Internal Server Error: An unexpected error occurred on the server.