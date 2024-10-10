const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Route to get all quizzes
router.get('/', quizController.getQuizzes);

// Route to get a specific quiz by ID
router.get('/:id', quizController.getQuizById);

// Route to submit quiz answers and calculate the score
router.post('/submit', quizController.submitQuiz);

router.get('/quizzes', quizController.getAllQuizzes);

module.exports = router;
