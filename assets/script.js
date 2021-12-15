var startQuizDiv = document.querySelector(".startQuiz");
var questionDiv = document.querySelector(".questionDiv");
var questionTitle = document.querySelector(".questionTitle");
var quizButton = document.querySelector(".quiz-button");
var checkQuestionText = document.querySelector(".checkQuestion");

var A = document.querySelector("#btn-zero");
var B = document.querySelector("#btn-one");
var C = document.querySelector("#btn-two");
var D = document.querySelector("#btn-three");

var questionIndex = 0;
var score = 0;
var currentQuestion = 0;
var timeLeft = 100;
var quizTimer;

// starts timer when clicking start quiz button
function setTimer(){
    setQuestions();
    
    var quizTimer = setInterval(function(){
        timer.innerHTML = timeLeft + " seconds remaining";

        timeLeft -= 1;
        if(timeLeft <=0){
            // can only clear inside this function
            clearInterval(quizTimer);
            document.querySelector("timer").innerHTML = "Time is up!"
        }
        },1000);
    
};

function setQuestions(){
    startQuiz.setAttribute("class", "hide");
    questionDiv.removeAttribute("class", "hide"); 

    nextQuestion();
};

//reset questionindex bc it is currently the same value as what it was originally set to
function nextQuestion(){
    questionTitle.textContent = quizQuestions[questionIndex].question;
    A.textContent = quizQuestions[questionIndex].options[0];
    B.textContent = quizQuestions[questionIndex].options[1];
    C.textContent = quizQuestions[questionIndex].options[2];
    D.textContent = quizQuestions[questionIndex].options[3];

    // if questionIndex <5 run next question
    // if questionIndex >5 run end quiz page. 
}

function checkAnswer (event){
    // undefined
    console.log(event.target.textContent);
    if (event.target.textContent === quizQuestions[questionIndex].answer){
         score ++
         questionIndex++
         nextQuestion();
         checkQuestionText.innerHTML = "Correct!";
    } else if (event.target.textContent != quizQuestions[questionIndex].answer){
        timeLeft = timeLeft - 10;
        questionIndex++
        nextQuestion();
        checkQuestionText.innerHTML = "Incorrect!";
        }
};

//reach end of quiz and add message

//highscores

//call back function
A.addEventListener("click", function(event){checkAnswer(event)});
B.addEventListener("click", function(event){checkAnswer(event)}); 
C.addEventListener("click", function(event){checkAnswer(event)}); 
D.addEventListener("click", function(event){checkAnswer(event)});  

console.log(quizButton);