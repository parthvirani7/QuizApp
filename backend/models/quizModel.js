const mongoose = require('mongoose');

// Define schema for each question
const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    answerChoices: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true 
    }
});

// Define schema for the quiz
const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    questions: [questionSchema]
});

// Export the Quiz model
module.exports = mongoose.model('Quiz', quizSchema);
