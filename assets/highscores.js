//new id for new highscore
var highScoreId = 0;
i = 0;

var savedScoreDiv = document.querySelector(".savedScoreDiv");

function createScoreLi (){
    var createScoreItem = document.createElement("li");
    createScoreItem.setAttribute("class", "savedScores");
    createScoreItem.textContent = highScore[i].name + " " + highScore[i].individualScore; 
    createScoreItem.setAttribute("high-score-id", highScoreId)
    savedScoreDiv.appendChild(createScoreItem);

    // new increase score id for each new high score
    highScoreId++;
}

//high scores load stored scores
var loadScores = function (){
    var savedScores = localStorage.getItem("allScores");
    savedScores = JSON.parse("allScores");

    // loop through savedScores array
    for (var i = 0; i < savedScores.length; i++){
        // pass each saved score into the createScoreLi function
        createScoreLi(savedScores[i]);
        
    }

    console.log(savedScores);
};



