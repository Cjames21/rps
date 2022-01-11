
var playerScore = 0;
var aiScore = 0;
    
var btnPlayerScore;
var btnAIScore;
var textMessage;


// TODO: Rework buttons to have listeners
window.onload = function() {    
    btnPlayerScore = document.getElementById("player_score");
    btnAIScore = document.getElementById("ai_score");
    textMessage = document.getElementById("message");  
}

function playRound(playerChoice) {
        
    let aiString = "";
    let aiChoice = Math.floor(Math.random() * 3) + 1;
    if(aiChoice == 1) {
        aiString = "Rock";
    } else if(aiChoice == 2) {
        aiString = "Paper";
    }
    else if (aiChoice == 3) {
        aiString = "Scissors";
    }

    console.log(playerChoice + " " + aiString);

    if(playerChoice == "Paper" && aiString == "Rock") {
        playerWins();
    }
    else if(playerChoice == "Rock" && aiString == "Scissors") {
        playerWins();
    }
    else if(playerChoice == "Scissors" && aiString == "Paper") {
        playerWins();
    }
    else {
        aiWins();
    }
    
}

function playerWins() {
    playerScore += 1;
    btnPlayerScore.textContent = "Player Score: " + playerScore;
    textMessage.textContent = "Player Wins!";
}

function aiWins() {
    aiScore += 1;
    btnAIScore.textContent = "AI Score: " + aiScore;
    textMessage.textContent = "AI Wins!";
}

function playAgain() {
    playerScore = 0;
    btnPlayerScore.textContent = "Player Score: " + playerScore; 
    aiScore = 0;
    btnAIScore.textContent = "AI Score: " + aiScore;
    textMessage.textContent = "";
}



