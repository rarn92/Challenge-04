var introText = document.getElementById('intro');
var startButton = document.getElementById("startButton");
var timeRemain = document.getElementById("timeRemaining");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");
var questionText = document.getElementById("questionText");
var buttonA = document.getElementById("answerA");
var buttonB = document.getElementById("answerB");
var buttonC = document.getElementById("answerC");
var buttonD = document.getElementById("answerD");
var allAnswerButtons = document.getElementById("allAnswers");
var answerResponse = document.getElementById("answerResponse");

var currentQuestion = 0;
var secondsLeft = 60;
var userScore = 0;

var correctAnswer = ['B', 'B', 'D', 'A'];

timeRemain.textContent = secondsLeft;
score.textContent = userScore;

// Start Button
startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeRemain.textContent = secondsLeft;
    startButton.style.display = "none";
    answerA.style.display = "inline-block";
    answerB.style.display = "inline-block";
    answerC.style.display = "inline-block";
    answerD.style.display = "inline-block";
    
    if (currentQuestion == 0) {
        Question0();
    }

    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        gameOver();
    }

    if(currentQuestion > 3) {
        clearInterval(timerInterval);
        gameOver();
    }

    }, 1000);
});

// Generic Functions
function gameOver() {
    var scoreValue = userScore;
    localStorage.setItem('User Score', scoreValue);
    window.location.href = "Develop/gameOver.html";
};

function correct() {
    answerResponse.textContent = "Correct! +10 Points!";
    userScore +=10;
}

function incorrect() {
    answerResponse.textContent = "Incorrect: -10 seconds!";
    secondsLeft -=10;
}

function selectAnswer(selectedAnswer) {
    if (currentQuestion === 0) {
       answerQuestion0(selectedAnswer);
    }
    else if (currentQuestion === 1) {
        answerQuestion1(selectedAnswer);
    }
    else if (currentQuestion === 2) {
        answerQuestion2(selectedAnswer);
    }
    else if (currentQuestion === 3) {
        answerQuestion3(selectedAnswer);
    }
    
}

// Question 0
function Question0() {
    questionText.textContent = "1. Inside which HTML tag do we link our JavaScript?";
    answerA.textContent = "A: <p>"
    answerB.textContent = "B: <script>"
    answerC.textContent = "C: <a>"
    answerD.textContent = "D: <head>"
}

function answerQuestion0(selectedAnswer) {
    if (selectedAnswer === correctAnswer[0]) {
    correct();
    } else {
    incorrect();
    }
    
    score.textContent = userScore;

    Question1();
    currentQuestion ++;
}

// Question 1
function Question1() {
    questionText.textContent = "2. Inside which HTML section do we link our JavaScript?";
    answerA.textContent = "A: <head>"
    answerB.textContent = "B: <body>"
    answerC.textContent = "C: <footer>"
    answerD.textContent = "D: <script>"
}

function answerQuestion1(selectedAnswer) {
    if (selectedAnswer === correctAnswer[1]) {
    correct();
    } else {
    incorrect();
    }
    
    score.textContent = userScore;

    Question2();
    currentQuestion ++;
}

// Question 2
function Question2() {
    questionText.textContent = "3. What characters do we use to write an array?";
    answerA.textContent = "A: ()"
    answerB.textContent = "B: {}"
    answerC.textContent = "C: <>"
    answerD.textContent = "D: []"
}

function answerQuestion2(selectedAnswer) {
    if (selectedAnswer === correctAnswer[2]) {
    correct();
    } else {
    incorrect();
    }
    
    score.textContent = userScore;

    Question3();
    currentQuestion ++;
}

// Question 3
function Question3() {
    questionText.textContent = "3. What command allows us to see information in the console?";
    answerA.textContent = "A: console.log();"
    answerB.textContent = "B: view.console();"
    answerC.textContent = "C: console.view();"
    answerD.textContent = "D: log.console();"
}

function answerQuestion3(selectedAnswer) {
    if (selectedAnswer === correctAnswer[3]) {
    correct();
    } else {
    incorrect();
    }
    
    score.textContent = userScore;

    currentQuestion ++;
}