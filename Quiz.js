const quizData = [
  {
    question: "質問1: 1 + 1は？",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 1
  },
  {
    question: "質問2: 2 + 2は？",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  // 他の質問を追加する
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
  const output = [];

  quizData.forEach((questionData, questionIndex) => {
    const choices = [];

    questionData.choices.forEach((choice, choiceIndex) => {
      choices.push(
        `<label>
          <input type="radio" name="question${questionIndex}" value="${choiceIndex}">
          ${choice}
        </label>`
      );
    });

    output.push(
      `<div class="question">${questionData.question}</div>
      <div class="choices">${choices.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.choices');
  let score = 0;

  quizData.forEach((questionData, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const selected = answerContainer.querySelector(`input[name="question${questionIndex}"]:checked`);

    if (selected) {
      const selectedAnswer = parseInt(selected.value);
      if (selectedAnswer === questionData.correctAnswer) {
        score++;
      }
    }
  });

  resultsContainer.innerHTML = `正解数: ${score} / ${quizData.length}`;
}

submitButton.addEventListener('click', showResults);

buildQuiz();
