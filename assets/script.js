var startQuizDiv = document.querySelector(".startQuiz");
var questionDiv = document.querySelector(".questionDiv");
var questionTitle = document.querySelector(".questionTitle");
var A = document.querySelector("#btn-zero");
var B = document.querySelector("#btn-one");
var C = document.querySelector("#btn-two");
var D = document.querySelector("#btn-three");

var questionIndex = 0;
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

function nextQuestion(){
    questionTitle.textContent = questionIndex.question;
    A.textContent = quizQuestions[questionIndex].options[0];
    B.textContent = quizQuestions[questionIndex].options[1];
    C.textContent = quizQuestions[questionIndex].options[2];
    D.textContent = quizQuestions[questionIndex].options[3];

}


//for (var i = 0; i <quizQuestions.length; i++) {

//var h1 = document.createElement("H1");
   // currentQuestion = quizQuestions.question[0];
   // h1.className = "questionTitle";
   // h1.innerText = currentQuestion; // add next to be questions from array above 
    // i feel like i need to set a certain var to 0
  //  h1.appendChild(questionDiv); //append to the start quiz div that we clear at the beginning of the function?
    
    //check answer function
    //add or deduct points

//reach end of quiz and add message

//highschores