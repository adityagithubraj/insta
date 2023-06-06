# Social Media App API

## Dependencies

> "bcrypt": "^5.1.0",

> "dotenv": "^16.0.3",

> "express": "^4.18.2",

> "jsonwebtoken": "^9.0.0",

> "mongoose": "^7.0.1"

> "nodemon"

## Endpoints

- /api/register
- /api/login
- /api/users
- /api/users/:id/friends
- /api/users/:id/friends
- /api/users/:id/friends/:friendId
- /api/users/:id/friends/:friendId
- /api/posts
- /api/posts
-  /api/posts:id
- /api/posts:id/like
- /api/posts:id/comment

### POST: /user/register

- User with the same email can not register

> **body***: `{name, email, password ,dodo ,dob,bio}`



### POST: /api/post

> **body***: `{user, text ,image,createdAt}`


 