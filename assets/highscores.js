var savedScoreDiv = document.querySelector(".savedScoreDiv");

function createScoreLi (){
    var createScoreItem = document.createElement("li");
    createScoreItem.setAttribute("class", "savedScores");
    createScoreItem.textContent = savedScores[i].name + " " + savedScores[i].individualScore; 
    savedScoreDiv.appendChild(createScoreItem);
}

//high scores load stored scores
var loadScores = function (){
    var savedScores = localStorage.getItem("highScore");
    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < savedScores.length; i++){
        createScoreLi(loadScores[i]);
        
    }

};





