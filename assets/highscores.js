var totalHighScores = 10;
var high_scores = "highScores";
var highScoreString = localStorage.getItem(high_scores);



function checkHighScore(score) {
    var highScores = jon.parse(highScoreString) ?? []; 
    var lowestScore = highScores[totalHighScores - 1]?.score ?? 0;

    if(score > lowestScore){
        saveHighScore(score, highScores);
        showHighScores();
    }
}