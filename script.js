let timer = document.querySelector(".timer");
let timerCount;
let startPage = document.getElementById("start-page");
let startButton = document.getElementById("start-button");
let questions = document.getElementById("questions");
let tmpFinish = document.getElementById("tmp-finish"); 
let allDone = document.getElementById("all-done");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let highScores = document.getElementById("high-scores");
let highScoresList = document.getElementById("high-scores-list");
let highScoresLink = document.getElementById("high-scores-link");
let playAgain = document.getElementById("play-again");

function init() {
  defaultStart()
}

function defaultStart() {
  timer.textContent = "Time 0"
  startButton.disabled = false;
}

startButton.addEventListener("click", startGame);

function startGame() {
  timerCount = 5;
  timer.textContent = "Time " + timerCount;
  startButton.disabled = true;
  // renderQuestions()
  startTimer()
  console.log("start timer");
  startPage.setAttribute("class", "hide");
  questions.setAttribute("class", "show");
}

function startTimer() {
  let timeInterval = setInterval(function() {
    timerCount--;
    timer.textContent = "Time " + timerCount;
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   if (isWin && timerCount > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(timer);
    //     winGame();
    //   }
    // }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timeInterval);
      // loseGame();
      console.log("end timer");
    }
  }, 1000);
}

highScoresLink.addEventListener("click", function(event) {
  event.preventDefault();
  startPage.setAttribute("class", "hide");
  clearHighScores();
  renderHighScores();
});

// Temporary functionality to bypass question anwering and end game
tmpFinish.addEventListener("click", endGame);

function endGame(event) {
  event.preventDefault();
  questions.setAttribute("class", "hide");
  allDone.setAttribute("class", "show");
}

let players = [];
let storedPlayers = [];

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create player object from submission
  let player = {
      initials: initialsInput.value.trim(),
      score: Math.floor(Math.random() * 50)
  };

  initialsInput.value = "";

  players.push(player)
  console.log("players: ", players);
  localStorage.setItem("players", JSON.stringify(players));

  clearHighScores();
  renderHighScores();
});

function clearHighScores() {
  let ol = document.getElementById("high-scores-list");

  ol.innerHTML = "";
}

function renderHighScores() {
  allDone.setAttribute("class", "hide");
  highScores.setAttribute("class", "show left");

  storedPlayers = JSON.parse(localStorage.getItem("players"));

  // sort storedPlayers by score
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

playAgain.addEventListener("click", function(event) {
  event.preventDefault();
  highScores.setAttribute("class", "hide");
  startPage.setAttribute("class", "show");
  console.log("play again");
  defaultStart()
});

init();