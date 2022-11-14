var timer = document.querySelector(".timer");
var timerCount;
var startPage = document.getElementById("start-page");
var startButton = document.getElementById("start-button");
var questions = document.getElementById("questions");
var tmpFinish = document.getElementById("tmp-finish"); 
var allDone = document.getElementById("all-done");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var highScores = document.getElementById("high-scores");
var highScoresList = document.getElementById("high-scores-list");
var playAgain = document.getElementById("play-again");

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
  console.log("hi");
  startPage.setAttribute("class", "hide");
  questions.setAttribute("class", "show");
}

function startTimer() {
  var timeInterval = setInterval(function() {
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
      console.log("bye");
    }
  }, 1000);
}

// Temporary functionality to bypass question anwering and end game
tmpFinish.addEventListener("click", endGame);

function endGame(event) {
  event.preventDefault();
  questions.setAttribute("class", "hide");
  allDone.setAttribute("class", "show");
}

var players = [];

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create player object from submission
  var player = {
      initials: initialsInput.value.trim(),
      score: ""
  };

  players.push(player)
  localStorage.setItem("players", JSON.stringify(players));
  console.log(players);
  renderHighScores();
});

// NEXT: working on rendering a list of players
function renderHighScores() {
  allDone.setAttribute("class", "hide");
  highScores.setAttribute("class", "show");

  var storedPlayers = JSON.parse(localStorage.getItem("players"));

  // Render a new li for each player
  for (var i = 0; i < storedPlayers.length; i++) {

    var playee = players[i];

    var li = document.createElement("li");
    
    li.textContent = playee;
    li.setAttribute("data-index", i);

    highScoresList.appendChild(li);
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