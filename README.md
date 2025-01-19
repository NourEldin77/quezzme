# Quezzme API

Quezzme is an easy way for creating editing and deleting, managing interactive quizzes.

#### Functionalities of API:

- create a user and use JWT authentication to register and login
- create, get, delete, and update quizzes
- add, edit, and delete questions for the quiz
- add multiple answers to the questions

## Table of Content

- [Environment](#environment)
- [Installation](#installation)
- [File Descriptions](#file-descriptions)
- [Usage](#usage)
- [Swagger Documentation](#swagger-documentation)
- [Tests](#tests)
- [Bugs](#bugs)
- [Authors](#authors)
- [License](#license)

## Environment

This project is interpreted/tested on Ubuntu 22.04.5 LTS using node (v21.7.2)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/NourEldin77/quezzme.git
   ```

2. Navigate to the project directory:

   ```sh
   cd quezzme
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

4. Build the project:

   ```sh
   npm run build
   ```

5. Start the server:
   ```sh
   npm run start
   ```

## File Descriptions

The project directory contains the following files:

- **src/**: Contains the source code for the API.

  - **controllers/**: Handles the logic for different routes.
  - **models/**: Defines the functions to interact with models on the database.
  - **routes/**: Defines the API endpoints and their handlers.
  - **middleware/**: Contains middleware functions for authentication and error handling.
  - **utils/**: Utility functions used throughout the project.
  - **db.ts**: Sets up the Prisma client for database interactions.
  - **server.ts**: Entry point for the Express server configuration.
  - **index.ts**: Starts the server and listens on the specified port.

- **prisma/**: Contains the Prisma schema and migration files.

- **tests/**: Contains test files for the project.

  - Integration tests for the API endpoints.

- **package.json**: Lists the project dependencies and scripts.

- **README.md**: Documentation for the project.

- **.gitignore**: Specifies files and directories to be ignored by Git.

## Usage

To use the Quezzme API After installation locally or by using on Heroku server

- **Register a new user:**

  Send a POST request to `/auth/register` with the following JSON payload:

  ```json
  {
    "username": "your_username",
    "email": "your_email",
    "password": "your_password",
    "confirmPassword": "your_password"
  }
  ```

- **Login:**

  Send a POST request to `/auth/login` with the following JSON payload:

  ```json
  {
    "email": "your_email",
    "password": "your_password"
  }
  ```

  The response will include a JWT token. Use this token for authenticated requests.

- **Create a new quiz:**

  Send a POST request to `/quizzes` with the following JSON payload and the JWT token in the Authorization header:

  ```json
  {
    "title": "Quiz Title",
    "description": "Quiz Description"
  }
  ```

- **Get all quizzes:**

  Send a GET request to `/quizzes` with the JWT token in the Authorization header.

- **Get a quiz by ID:**

  Send a GET request to `/quizzes/{id}` with the JWT token in the Authorization header.

- **Delete a quiz:**

  Send a DELETE request to `/quizzes/{id}` with the JWT token in the Authorization header.

- **Add a question to a quiz:**

  Send a POST request to `/quizzes/{quizId}/questions` with the following JSON payload and the JWT token in the Authorization header:

  ```json
  {
    "questionText": "Question Text",
    "questionType": "MCQ"
  }
  ```

- **Get all questions for a quiz:**

  Send a GET request to `/quizzes/{quizId}/questions` with the JWT token in the Authorization header.

- **Get a question by ID:**

  Send a GET request to `/quizzes/{quizId}/questions/{questionId}` with the JWT token in the Authorization header.

- **Update a question:**

  Send a PUT request to `/quizzes/{quizId}/questions/{questionId}` with the following JSON payload and the JWT token in the Authorization header:

  ```json
  {
    "questionText": "Updated Question Text",
    "questionType": "MCQ"
  }
  ```

- **Delete a question:**

  Send a DELETE request to `/quizzes/{quizId}/questions/{questionId}` with the JWT token in the Authorization header.

- **Add an answer to a question:**

  Send a POST request to `/quizzes/{quizId}/questions/{questionId}/answers` with the following JSON payload and the JWT token in the Authorization header:

  ```json
  {
    "answerText": "Answer Text",
    "isCorrect": true
  }
  ```

- **Get all answers for a question:**

  Send a GET request to `/quizzes/{quizId}/questions/{questionId}/answers` with the JWT token in the Authorization header.

- **Get an answer by ID:**

  Send a GET request to `/quizzes/{quizId}/questions/{questionId}/answers/{answerId}` with the JWT token in the Authorization header.

- **Update an answer:**

  Send a PUT request to `/quizzes/{quizId}/questions/{questionId}/answers/{answerId}` with the following JSON payload and the JWT token in the Authorization header:

  ```json
  {
    "answerText": "Updated Answer Text",
    "isCorrect": false
  }
  ```

- **Delete an answer:**

  Send a DELETE request to `/quizzes/{quizId}/questions/{questionId}/answers/{answerId}` with the JWT token in the Authorization header.

## Swagger Documentation

The API documentation is available via Swagger. To access the Swagger UI, start the server and navigate to `/api-docs` in your web browser. This will provide a detailed and interactive documentation of all the available endpoints and their respective request/response formats.

## Tests

Tests for this project are available on the `dev` branch. To run the tests, follow these steps:

1. Switch to the `dev` branch:

   ```sh
   git checkout dev
   ```

2. Install the necessary dependencies:

   ```sh
   npm install
   ```

3. Run the tests:
   ```sh
   npm test
   ```

The tests cover the following functionalities:

- User registration and login using JWT authentication
- Creating, retrieving, updating, and deleting quizzes
- Adding, editing, and deleting questions for quizzes
- Adding multiple answers to questions

## Bugs

No known bugs at this time.

## Authors

Nour Eldin - [Github](https://github.com/NourEldin77/)

## License

Public Domain. No copy write protection.
