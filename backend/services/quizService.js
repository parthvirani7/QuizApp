const Quiz = require('../models/quizModel');
const validateAnswers = require('../utils/validateAnswers');

// Fetch all quizzes
exports.fetchAllQuizzes = async () => {
    const quizzes = await Quiz.find({});
    return quizzes;
};

// Fetch a quiz by ID
exports.fetchQuizById = async (quizId) => {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
        throw new Error('Quiz not found');
    }
    return quiz;
};

// Submit a quiz and calculate score
exports.submitQuizAnswers = async (quizId, userAnswers) => {
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
        throw new Error('Quiz not found');
    }

    const score = validateAnswers(quiz, userAnswers);
    return score;
};
