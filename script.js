

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Leo Tolstoy", "Mark Twain", "William Shakespeare", "Charles Dickens"],
    answer: "William Shakespeare",
  },

  
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", loadQuiz);

function loadQuiz() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.innerText = quizData[currentQuestion].question;
  optionsEl.innerHTML = "";

  quizData[currentQuestion].options.forEach((option) => {
    optionsEl.innerHTML += `
          <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value="${option}" id="${option}">
              <label class="form-check-label" for="${option}">
                  ${option}
              </label>
          </div>`;
  });

  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (!selectedOption) {
    document.getElementById("result").innerText = "Please select an answer!";
    return;
  }

  const answer = selectedOption.value;

  if (answer === quizData[currentQuestion].answer) {
    score++;
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong answer!";
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    setTimeout(loadQuiz, 1000);
  } else {
    setTimeout(showFinalScore, 1000);
  }
}

function showFinalScore() {
  document.getElementById("quiz-container").style.display = "none"; 
  document.getElementById("final-score").style.display = "block"; 

  document.getElementById("final-score-text").innerHTML = `
      <h4 class="text-center">You scored ${score}/${quizData.length}!</h4>`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quiz-container").style.display = "block"; 
  document.getElementById("final-score").style.display = "none"; 

  loadQuiz(); 
}
