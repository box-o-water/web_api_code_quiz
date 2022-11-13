var timer = document.querySelector(".timer");
var timerCount;
var startButton = document.querySelector(".start-button");

function init() {
  noTime()
}

function noTime() {
  timer.textContent = "Time 0"
}

startButton.addEventListener("click", startGame);

function startGame() {
  timerCount = 5;
  timer.textContent = "Time " + timerCount;
  startButton.disabled = true;
  // renderQuestions()
  startTimer()
  console.log("hi");
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

init();