const questions = [
  {
      question: "What is the capital of France?",
      answers: ["London", "Berlin", "Paris", "Madrid"],
      correctIndex: 2,
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: ["Venus", "Mars", "Jupiter", "Neptune"],
      correctIndex: 1,
  },
  // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const timerElement = document.getElementById("timer");
const timeLeftElement = document.getElementById("time-left");
const scoreElement = document.getElementById("score");

function startTimer() {
  timerInterval = setInterval(() => {
      timeLeft--;
      timeLeftElement.textContent = timeLeft;
      if (timeLeft === 0) {
          clearInterval(timerInterval);
          checkAnswer(null);
      }
  }, 1000);
}

function showQuestion() {
  clearInterval(timerInterval);
  timeLeft = 10;
  timeLeftElement.textContent = timeLeft;
  startTimer();

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  answersElement.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.className = "answer-btn";
      button.onclick = () => checkAnswer(index);
      answersElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  clearInterval(timerInterval);

  if (selectedIndex === currentQuestion.correctIndex) {
      score++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
  } else {
      feedbackElement.textContent = "Incorrect. The correct answer was: " + currentQuestion.answers[currentQuestion.correctIndex];
      feedbackElement.style.color = "red";
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
          feedbackElement.textContent = "";
          showQuestion();
      }, 2000);
  } else {
      endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  questionElement.textContent = "Quiz completed!";
  answersElement.innerHTML = "";
  feedbackElement.textContent = "";
  timerElement.textContent = "Time left:";
  timeLeftElement.textContent = "0";
  scoreElement.textContent = `Final Score: ${score}`;
}

showQuestion();
