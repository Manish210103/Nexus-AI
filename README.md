# MERN Chat Bot Application with Gemini API

This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It utilizes the Gemini API for chat bot functionality.

## Features

- User authentication (Sign Up, Log In, Log Out)
- Chat bot functionality powered by the Gemini API
- Real-time chat interface
- MongoDB database for storing user data and chat history
- Responsive user interface

## Technologies Used

- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- Express.js: [https://expressjs.com/](https://expressjs.com/)
- React.js: [https://reactjs.org/](https://reactjs.org/)
- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Gemini API: [Gemini API Documentation](https://geminiapi.com/documentation)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or a MongoDB Atlas account

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies - npm install

### Configuration
1. Create a .env file:Create a .env file in the root directory of the project.
2. Define environment variables:Define the following environment variables in the .env file:
- MONGODB_URI=<your_mongodb_connection_string>
- VITE_API_GENERATIVE_LANGUAGE_CLIENT=<your_gemini_api_key>
3. npm run build
4. npm run dev

Access the application:Open your browser and go to http://localhost:3000/
