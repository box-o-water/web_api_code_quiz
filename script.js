// global page variables

let timer = document.querySelector(".timer");
let timerCount;

let startPage = document.getElementById("start-page");
let questionsPage = document.getElementById("questions-page");
let allDonePage = document.getElementById("all-done-page");
let highScoresPage = document.getElementById("high-scores-page");

let initialsInput = document.getElementById("initials");

let startQuizBtn = document.getElementById("start-quiz-button");
let endQuizBtn = document.getElementById("end-quiz-btn"); 
let submitBtn = document.getElementById("submit-btn");
let playAgainBtn = document.getElementById("play-again-btn");
let clearScoresBtn = document.getElementById("clear-scores-btn");

let highScoresLink = document.getElementById("high-scores-link");

// start / home page
function init() {
  console.log("init");
  defaultStart()
}

function defaultStart() {
  console.log("default Start Quiz page");
  timer.textContent = "Time 0"
}

// playing the quiz
startQuizBtn.addEventListener("click", function() {
  console.log("start quiz button");
  startQuiz();
});

function startQuiz() {
  console.log("starting quiz");
  timerCount = 5;
  timer.textContent = "Time " + timerCount;
  // renderQuestions()
  startTimer()
  startPage.setAttribute("class", "hide");
  questionsPage.setAttribute("class", "show");
}

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

highScoresLink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("view high scores link");
  startPage.setAttribute("class", "hide");
  questionsPage.setAttribute("class", "hide");
  clearRenderedPlayersHTML();
  renderHighScores();
});

// Temporary functionality to bypass question anwering and end quiz
endQuizBtn.addEventListener("click", function() {
  console.log("end quiz button");
  endQuiz()
});

function endQuiz() {
  console.log("ending quiz");
  questionsPage.setAttribute("class", "hide");
  allDonePage.setAttribute("class", "show");
}

let players = [];
let storedPlayers = [];

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("submit button");
  // create player object from submission
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

function clearRenderedPlayersHTML() {
  console.log("clearing rendered players from HTML");

  let highScoresList = document.getElementById("high-scores-list");

  highScoresList.innerHTML = "";
}

function clearPlayersStorage() {
  console.log("clearing players from local storage");
  localStorage.clear(players);
}

function renderHighScores() {
  console.log("rendering high scores, if any");
  allDonePage.setAttribute("class", "hide");
  highScoresPage.setAttribute("class", "show");

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

playAgainBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("play again button");
  highScoresPage.setAttribute("class", "hide");
  startPage.setAttribute("class", "show");
  defaultStart()
});

clearScoresBtn.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clear scores button");
  clearRenderedPlayersHTML()
  clearPlayersStorage()
  players = []
});

init();