//new id for new highscore
var savedScoreDiv = document.querySelector(".savedScoreDiv");
var highScoreUl = document.querySelector(".highScoreUl");
var clearScores = document.querySelector(".clearScores");

//high scores load local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if(allScores !== null){
    for (var i =0; i < allScores.length; i++) {
        
        var createScoreItem = document.createElement("li");
        createScoreItem.setAttribute("class", "savedScores");
        createScoreItem.textContent = allScores[i].name + " - " + allScores[i].individualScore; 
        highScoreUl.appendChild(createScoreItem);
    }
}

clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
})