var quizQuestions = [
    {
        question: "Commonly used data types to NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "A very useful tool user during development and debugging for printing content to the debugger is",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    }
];

var startQuizDiv = document.querySelector("startQuiz");
// starts timer when clicking start quiz button
function setTimer(){
    setQuestions();
    
    var timeLeft = 100;
    var quizTimer = setInterval(function(){
        timer.innerHTML = timeLeft + " seconds remaining";

        timeLeft -= 1;
        if(timeLeft <=0){
            clearInterval(quizTimer);
            document.querySelector("timer").innerHTML = "Time is up!"
        }
        },1000);
    
};

function setQuestions (){
    //clears existing content out of div
    startQuiz.innerHTML = "";
    //hoping this loops through questions?
    for (var i = 0; i < quizQuestions.length; i++){
        var questionLoop = questions[setQuestions].title;
        var questionChoices = questions[setQuestions].options;
        startQuiz.textContent = questionLoop;
    }
    // show first quiz
    //on button click, switch to next question
}


// Add questions and answers to the page 


// on click start quiz, clear current data
// loop to loop through info in an array
// show next question

// determine if answer is correct

//reach end of quiz and add message

//highschores