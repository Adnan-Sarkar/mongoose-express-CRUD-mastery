# mongoose-express-CRUD-mastery [![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)]() [![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)]()

## Table of Contents

- [Live Server Test](#live-server-test)
  - [Live API](#live-api)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation locally](#installation-locally)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Live Server Test

To test the live API endpoints, I prefer using [Postman](https://www.postman.com/) for testing with better user experience.

### Live API

```bash
https://mongoose-express-crud-mastery-by-adnan-sarkar.vercel.app/
```

for `user`

- **GET** /api/users
- **GET** /api/users/:userId
- **POST** /api/users
- **PUT** /api/users/:userId
- **DELETE** /api/users/:userId

for `orders`

- **GET** /api/users/:userId/orders
- **GET** /api/users/:userId/orders/total-price
- **PUT** /api/users/:userId/orders

## Getting Started

These instructions will help you set up and run the application on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation locally

1. Clone the repository:

```bash
https://github.com/Adnan-Sarkar/mongoose-express-CRUD-mastery.git
```

2. Navigate to the project directory:

```bash
cd mongoose-express-CRUD-mastery
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file in the root directory and configure environment variables:

```bash
PORT=...
MONGODB_URI=...
SALT_ROUND=...
```

### Running the Application

1. Convert the typescript file to javascript file

```bash
npm run build
```

2. Running typescript in development environment

```bash
npm run start:dev
```

3. Running javascript in production environment

```bash
npm run start:production
```

## API Endpoints

for `user`

- **GET** /api/users
- **GET** /api/users/:userId
- **POST** /api/users
- **PUT** /api/users/:userId
- **DELETE** /api/users/:userId

for `orders`

- **GET** /api/users/:userId/orders
- **GET** /api/users/:userId/orders/total-price
- **PUT** /api/users/:userId/orders

<br><br>

Thank you for exploring the mongoose-express-CRUD-mastery application! Feel free to provide feedback, report issues.

## 📢 Social Links

- [![](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adnan-sarkar-8b54341a0/)
- [![](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/AdnanSarkar14)
- [![](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/adnansarkaraduvai/)
- [![](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_a_d_u_v_a_i_/)
- [![](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://adnansarkar.hashnode.dev/)
