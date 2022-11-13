var time = document.querySelector(".time");
var secondsLeft = 100;

// var start = document.getElementById("start");
var start = document.querySelector("#start");

function setTime() {
  var timeInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = "Time " + secondsLeft;

    // if(secondsLeft === 0) {
    //   clearInterval(timeInterval);

    // }
  }, 1000);
}

function startGame() {
    start.innerHTML = "YOU CLICKED ME!";
  }

start.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(questions[0]);
});

var questions = [ "hi" ] 

function init() {
  setTime()
  startGame()
}

init();