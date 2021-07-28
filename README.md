CRUD users

interface User {
id: number;
name: string;
username: string;
email: string;
address: string;
password: string;
}

POST /users - Create user. Result: User

GET /users - Find all users. Result: User[]

GET /users/:id - Find user by id. Result: User

PUT /users/:id - Update user by id. Result: User

DELETE /users/:id - Delete user by id. Result: true
