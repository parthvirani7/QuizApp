const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');
const quizId = '60d5ec49e3c3f10015c5d6a0'; 

// Fetch the quiz from the backend
async function fetchQuiz() {
    try {
        const response = await fetch(`http://localhost:4000/api/quizzes/${quizId}`);
        if (!response.ok) {
            const errorData = await response.json();
            resultContainer.innerText = errorData.message || 'Error loading quiz. Please try again later.';
            return;
        }
        const quiz = await response.json();
        displayQuiz(quiz);
    } catch (error) {
        console.error('Error fetching quiz:', error);
        resultContainer.innerText = 'Error loading quiz. Please try again later.';
    }
}

// Display the quiz questions and options
function displayQuiz(quiz) {
    quizContainer.innerHTML = `
        <h2>${quiz.title}</h2>
        <p>${quiz.description}</p>
    `;
    quiz.questions.forEach((question, index) => {
        const questionHTML = `
            <div class="question">${index + 1}. ${question.question}</div>
            <div class="options">
                ${question.options.map((option) => `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });
}

submitButton.addEventListener('click', () => {
    const answers = Array.from({ length: quizContainer.querySelectorAll('.question').length }, (_, index) => {
        return document.querySelector(`input[name="question${index}"]:checked`)?.value || null;
    });

    const score = answers.filter(answer => answer === "4").length;
    resultContainer.innerHTML = `Your score: ${score} out of ${answers.length}`;
});

fetchQuiz();
