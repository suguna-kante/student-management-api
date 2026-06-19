# Student Management API

A RESTful backend API built using **Node.js**, **Express.js**, and **MongoDB**. This project provides student management functionality with authentication, authorization, search, filtering, pagination, and security features.

##  Features

* CRUD Operations for Students
* User Registration & Login
* JWT Authentication
* Password Hashing using bcrypt
* MVC Architecture
* Search & Filter
* Pagination
* MongoDB Atlas Integration
* Error Handling Middleware
* Security using Helmet
* Rate Limiting
* CORS Support
* Deployed on Render

##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Helmet
* Express Rate Limit
* CORS
* Render
* Git & GitHub

##  Project Structure


student-management-api
│
├── controllers
├── middleware
├── models
├── routes
├── app.js
├── package.json
├── .env
└── README.md
```

##  API Endpoints

### Authentication

#### Register User

```http
POST /auth/register
```

#### Login User

```http
POST /auth/login
```

#### Get Profile

```http
GET /auth/profile
```

---

### Students

#### Get All Students

```http
GET /students
```

#### Get Student By ID

```http
GET /students/:id
```

#### Create Student

```http
POST /students
```

#### Update Student

```http
PUT /students/:id
```

#### Delete Student

```http
DELETE /students/:id
```

---

### Search & Pagination

```http
GET /students?name=Ravi
```

```http
GET /students?branch=CSE
```

```http
GET /students?page=1&limit=5
```

##  Installation

Clone the repository:

```bash
git clone https://github.com/suguna-kante/student-management-api.git
```

Navigate to project folder:

```bash
cd student-management-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the application:

```bash
node app.js
```

or

```bash
nodemon app.js
```

##  Live Demo

Render Deployment:

```text
https://student-management-api-opy6.onrender.com
```

## Learning Outcomes

Through this project, I learned:

* Building REST APIs
* MongoDB & Mongoose
* JWT Authentication
* MVC Architecture
* Error Handling
* API Security
* Deployment using Render
* Version Control with Git & GitHub

##  Author

**Suguna Kante**

GitHub: https://github.com/suguna-kante
