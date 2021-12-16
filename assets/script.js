var startQuizDiv = document.querySelector(".startQuiz");
var questionDiv = document.querySelector(".questionDiv");
var questionTitle = document.querySelector(".questionTitle");
var quizButton = document.querySelector(".quiz-button");
var checkQuestionText = document.querySelector(".checkQuestion");
var viewHighScores = document.querySelector(".higscores");

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
        if(timeLeft === 0 || questionIndex === quizQuestions.length){
            clearInterval(quizTimer);
            document.querySelector(".timer").innerHTML = "Time is up!"
        }
        },1000);
    
};

function setQuestions(){
    startQuiz.setAttribute("class", "hide");
    questionDiv.removeAttribute("class", "hide"); 

    nextQuestion();
};

// this function loops through different questions or sends user to the highscore page
function nextQuestion(){
    if (questionIndex < 5){
        questionTitle.textContent = quizQuestions[questionIndex].question;
        A.textContent = quizQuestions[questionIndex].options[0];
        B.textContent = quizQuestions[questionIndex].options[1];
        C.textContent = quizQuestions[questionIndex].options[2];
        D.textContent = quizQuestions[questionIndex].options[3];
    } else{
        gameOver();
     }
};

//checks user's answer and either adds a score point or deducts time 
function checkAnswer (event){
    // undefined
    console.log(event.target.textContent);
    if (event.target.textContent === quizQuestions[questionIndex].answer){
         score = score + 10
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

//reach end of quiz and begin high score
function gameOver(){
    questionDiv.innerHTML = "";
    
    //create heading for "you finished!"
    var createH1 = document.createElement("h1");
    createH1.setAttribute("class","youFinished");
    createH1.textContent = "You finished!"

    questionDiv.appendChild(createH1);

    //create "your highscore is"
    var createP = document.createElement("p");
    createP.setAttribute("class","finalScore")
    createP.textContent = "Your final score is: " + score;
    questionDiv.appendChild(createP);

    //create div to host label and input
    var createInputDiv = document.createElement("div");
    createInputDiv.setAttribute("class", "inputDiv");
    questionDiv.appendChild(createInputDiv);

    //create label to associate with highscore
    var createLabel = document.createElement("label");
    createLabel.setAttribute("class", "createLabel");
    createLabel.textContent = "Enter your name: ";
    createInputDiv.appendChild(createLabel);

    //create input to grab user's name
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("class", "input");
    createInput.textContent = "";
    createInputDiv.appendChild(createInput);

    //create submit button
    var createSubmitButton = document.createElement("button");
    createSubmitButton.setAttribute("class", "submitButton");
    createSubmitButton.textContent = "Submit your high score";
    createInputDiv.appendChild(createSubmitButton);

    //event listener for submit button to add name to local storage
    createSubmitButton.addEventListener("click", function(){
        var scoreName = createInput.value;

        var highScore = {
            name: scoreName,
            individualScore: score
        }
        
        // add variable for all higschores, and add highscore to that variable .setItem("allScores", "newScore")
        localStorage.setItem("allScores",JSON.stringify(highScore));
        createInput.value="";

    })
}



//call back function
A.addEventListener("click", function(event){checkAnswer(event)});
B.addEventListener("click", function(event){checkAnswer(event)}); 
C.addEventListener("click", function(event){checkAnswer(event)}); 
D.addEventListener("click", function(event){checkAnswer(event)});  

