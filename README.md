
# Quiz Application Backend

This project is a backend API for managing quizzes and user submissions, built with **Node.js**, **Express**, and **MongoDB**.

## Features

- Fetch all quizzes or a specific quiz by ID.
- Submit answers and get the calculated score.
- Error handling for invalid submissions.

## Technologies

- **Node.js**, **Express**, **MongoDB**, **Mongoose**

## Project Structure

\`\`\`
.
├── config/           # Configuration settings
├── controllers/      # API logic
├── models/           # Database models
├── routes/           # API routes
├── services/         # Business logic
└── app.js            # Main entry point
\`\`\`

## Setup

1. Clone the repo and install dependencies:

   \`\`\`bash
   git clone <repo-url> && cd quiz-app-backend
   npm install
   \`\`\`

2. Configure your MongoDB URI in \`config.env\`.

3. Start the server:

   \`\`\`bash
   npm start
   \`\`\`

## API Overview

- **GET /api/quizzes**: Fetch all quizzes.
- **GET /api/quizzes/:id**: Fetch a quiz by ID.
- **POST /api/quizzes/submit**: Submit quiz answers.

For more details, refer to the codebase.

## License

Open-source under the **MIT License**.
