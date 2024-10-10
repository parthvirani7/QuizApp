const quizService = require('../services/quizService');

// Fetch all quizzes
exports.getQuizzes = async (req, res, next) => {
    try {
        const quizzes = await quizService.fetchAllQuizzes();
        res.status(200).json(quizzes);
    } catch (error) {
        next(error);
    }
};

// Fetch a specific quiz by ID
exports.getQuizById = async (req, res, next) => {
    try {
        const quiz = await quizService.fetchQuizById(req.params.id);
        res.status(200).json(quiz);
    } catch (error) {
        next(error);
    }
};

// Submit quiz and calculate score
exports.submitQuiz = async (req, res, next) => {
    try {
        const { quizId, userAnswers } = req.body;
        const score = await quizService.submitQuizAnswers(quizId, userAnswers);
        res.status(200).json({ score });
    } catch (error) {
        next(error);
    }
};
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        if (!quizzes.length) {
            return res.status(404).json({ message: 'No quizzes found.' });
        }
        res.json(quizzes);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error loading quizzes. Please try again later.' });
    }
};
