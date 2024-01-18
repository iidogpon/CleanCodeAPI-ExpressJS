# CleanCodeCustomersAPI

## Introduction
CleanCodeCustomersAPI is a Node.js and Express-based RESTful API that demonstrates clean coding practices and principles in a simple yet scalable friend management system. This project focuses on readability, maintainability, and effective architecture design.

## Technologies
- Node.js
- Express
- fs-extra (for file operations)

## Setup and Installation
1. Clone the repository:
2. Navigate to the project directory: cd CleanCodeCustomersAPI
3. Install dependencies: npm install

## Running the Server
To start the server, run:

The server will start on `localhost:3000`.

## API Endpoints
The API provides the following endpoints:
- `GET /customers`: Retrieve a list of all friends.
- `POST /customers`: Add a new friend.
- `PATCH /customers/:id`: Update a friend's information.
- `DELETE /customers/:id`: Remove a friend.

## Code Examples
Example of a GET request to retrieve all friends:
```javascript
// Example using fetch API
fetch('http://localhost:3000/customers')
  .then(response => response.json())
  .then(data => console.log(data));


