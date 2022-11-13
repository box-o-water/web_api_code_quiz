GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score

---
high level pseudocode:

main screen
- view highscores upper left
- timer upper right
- h1 quiz name thingy
- description
- button
    - when hit button, goes to question screen

question screen
- view highscores
- timer starts at x seconds, incrementing down
- random question displayed, with 4 possible answers
- if you select the wrong answer, wrong message pops up underneath for a couple seconds, y seconds subtracted from timer
- if you select the correct answer, correct message pops up underneath for a couple seconds, goes to next answer
- when all questions answered, or, if you run out of time? goes to the all done screen

all done screen
- view highscores
- timer
- your final score
- text box to type in initials and submit button
    - when submit, go to high scores screen

high scores screen
- list of high scores, maybe top 10, fastest to slowest?
- go back button (to go back to main screen and play again)
- clear high scores button, will clear list, but go back button is still visible



local storage:
- top x:
  - initials: score




question:
"what isn't a data type?"
1: number
2: string
3: boolean
4: pizza

answer:
"what isn't a data type?"
4: pizza


some possible configs:

var quizObjects = [
  {
    question: "what isn't a data type?",
    choices: [
      "1. strings",
      "2. booleans",
      "3. numbers",
      "4. pizza"
    ],
    answer: "4. pizza"
  },
    {
    question: "what isn't a lame phrase?",
    choices: [
      "1. dude",
      "2. whatevs",
      "3. sup",
      "4. hello"
    ],
    answer: "2. hello"
  }
]

var quizObjects = [
    (q1 = {
        question: "what isn't a data type?",
        "1. strings",
        "2. booleans",
        "3. numbers",
        "4. pizza"
        }
    ),
    (q2 = {
        question: "what isn't a lame phrase?",
        "1. dude",
        "2. whatevs",
        "3. sup",
        "4. hello"
        }
    )
]