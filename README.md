# web_api_code_quiz

## Description

A timed quiz that tracks high scores to showcase our current JavaScript and Web API knowledge, written completely from scratch. No starter code was provided. See the [Acceptance Criteria](#acceptance-criteria).

To view the deployed website, click [here](https://box-o-water.github.io/web_api_code_quiz/).

![Web API Code Quiz](/assets/images/webapicodequizpreview.png)

## Current Status

* **This application is a work in progress.** 

* The questions aren't integrated yet, nor is the game logic itself.

* What does exist is the framework of views and ability to navigate between the views via buttons and links.

* For now, the Question choices do not work, but the End Quiz button will bypass to the All Done view, where logic IS working to enter initials, render High Scores, and clear the scores.

* The View High Scores link also works; the Timer is minimally set to start at 5 seconds upon clicking the Start Quiz button, and stops at 0.

## Our Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this module, this Challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
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
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](/assets/images/web-apis-homework-demo.gif)

## License

Licensed under the [MIT](/LICENSE) license.