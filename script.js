// global page variables

let timer = document.querySelector(".timer");
let timerCount;

let startView = document.getElementById("start-view");
let questionsView = document.getElementById("questions-view");
let allDoneView = document.getElementById("all-done-view");
let highScoresView = document.getElementById("high-scores-view");

let questionIndex = 0;
let displayQuestion = document.getElementById("display-question")

let initialsInput = document.getElementById("initials");

let startQuizBtn = document.getElementById("start-quiz-button");
let endQuizBtn = document.getElementById("end-quiz-btn"); 
let submitBtn = document.getElementById("submit-btn");
let playAgainBtn = document.getElementById("play-again-btn");
let clearScoresBtn = document.getElementById("clear-scores-btn");

let highScoresLink = document.getElementById("high-scores-link");

let players = [];
let storedPlayers = [];

// The init function calls defaultStart
function init() {
  console.log("init");
  defaultStart()
}

// The defaultStart function sets up the start / home view
function defaultStart() {
  console.log("default Start Quiz view");
  timer.textContent = "Time 0"
}

// The startQuizBtn event listener calls startQuiz
startQuizBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("start quiz button");
  startQuiz();
});

// The startQuiz function sets the timer and displays the questions view
function startQuiz() {
  console.log("starting quiz");

  // TODO move some timer stuff to startTimer
  timerCount = 5; // TODO replace with below line
  // timerCount = questions.length * 10
  timer.textContent = "Time " + timerCount;
  renderQuestion()
  startTimer()
  startView.setAttribute("class", "hide");
  questionsView.setAttribute("class", "show");
}

function renderQuestion() {
  let index = questionsArray[questionIndex]
  console.log("render question " + index.question );
  // console.log(questionsArray[questionIndex]);
  // console.log(questionsArray[questionIndex].choices.length);
  // console.log(questionsArray[questionIndex].choices[0]);

  let question = document.createElement("h2");
  question.textContent = index.question
  displayQuestion.appendChild(question)

  // create a button for each choice
  for (var i = 0; i < index.choices.length; i++) {

    var btn = document.createElement("button");
    btn.setAttribute("class", "button")
    btn.textContent = index.choices[i]
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(this.textContent);
    })

    displayQuestion.appendChild(btn);
  }
}

// The startTimer function decrements and zeroes out the timer
function startTimer() {
  console.log("starting timer");
  let timeInterval = setInterval(function() {
    timerCount--;
    timer.textContent = "Time " + timerCount;
    console.log("ending timer");
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   if (isWin && timerCount > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
    //     winQuiz();
    //   }
    // }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timeInterval);
      // loseQuiz();
    }
  }, 1000);
}

// The highScoresLink event listener clears/hides n/a views and calls renderHighScores
highScoresLink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("view high scores link");
  startView.setAttribute("class", "hide");
  questionsView.setAttribute("class", "hide");
  clearRenderedPlayersHTML();
  renderHighScores();
});

// The endQuizBtn event listener calls the endQuiz function
endQuizBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("end quiz button");
  endQuiz()
});

// The endQuiz function displays the all done view
function endQuiz() {
  console.log("ending quiz");
  questionsView.setAttribute("class", "hide");
  allDoneView.setAttribute("class", "show");
}

// The submitBtn event listener pushes player objects to local storage and calls renderHighScores
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("submit button");

  let player = {
      initials: initialsInput.value.trim(),
      score: Math.floor(Math.random() * 50)
  };

  initialsInput.value = "";

  players.push(player)
  console.log("players: ", players);
  localStorage.setItem("players", JSON.stringify(players));
  clearRenderedPlayersHTML();
  renderHighScores();
});

// The clearRenderedPlayersHTML function clears the existing rendered HTML list in preparationto be repopulated with the new rendered list
function clearRenderedPlayersHTML() {
  console.log("clearing rendered players from HTML");

  let highScoresList = document.getElementById("high-scores-list");

  highScoresList.innerHTML = "";
}

// The clearPlayersStorage function clears all players from local storage
function clearPlayersStorage() {
  console.log("clearing players from local storage");
  localStorage.clear(players);
}

// The renderHighScores function displays the high scores view, sorts and renders players from local storage to HTML list elements
function renderHighScores() {
  console.log("rendering high scores, if any");
  allDoneView.setAttribute("class", "hide");
  highScoresView.setAttribute("class", "show");

  storedPlayers = JSON.parse(localStorage.getItem("players"));

  if (storedPlayers !== null) {

    storedPlayers.sort(function(a, b) {
        return b.score - a.score;
    });
  
    for (let i = 0; i < storedPlayers.length; i++) {

      let li = document.createElement("li");

      li.textContent = storedPlayers[i].initials + " - " + storedPlayers[i].score;

      let ol = document.getElementById("high-scores-list");

      ol.appendChild(li);
    }
  }
}

// The playAgainBtn event listener displays the start view and calls defaultStart
playAgainBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("play again button");
  highScoresView.setAttribute("class", "hide");
  startView.setAttribute("class", "show");
  defaultStart()
});

// The clearScoresBtn event listener clears players data from all possible locations
clearScoresBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clear scores button");
  clearRenderedPlayersHTML()
  clearPlayersStorage()
  players = []
});

let questionsArray = [
  {
    question: "What is the answer to the ultimate question of life, the universe, and everything?",
    choices: ["wine", "bath", "42", "cats"],
    answer: "42"
  },
  {
    question: "What wine varietal should I drink tonight?",
    choices: ["cab", "cab sav", "cabernet", "cabernet sauvignon", "all of the above"],
    answer: "all of the above"
  }
];

init();
