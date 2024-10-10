module.exports = (quiz, userAnswers) => {
    let score = 0;

    quiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score += 1;
        }
    });

    return score;
};
