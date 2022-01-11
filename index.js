const hands = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var AIScore = 0;

function playRound() {
    let aiPlay = getComputerPlay();
    let pcPlay = getInput();
    whoWon(pcPlay, aiPlay);

    let playAgain = prompt();
    if(playAgain == "Y") {
        playRound();
    }
    else{
        return;
    }
}


// Returns string of AI's choice to a variable.
function getComputerPlay() {
    let rand = Math.random() * 3;
    let choice = "";
    switch(rand){
        case(rand <= 1):
            choice = "Rock";
            break;
        case(rand <= 2 && rand > 1):
            choice = "Paper";
            break;
        case(rand > 2):
            choice = "Scissors";
            break;
    }

    if(choice == "") {
        console.log("Something went wrong with the computer");
        return;
    }

    return choice;
}

// Returns string of player input to a variable.
function getInput() {
    console.log("Enter 1, 2, or 3 for Rock, Paper Scissors respectively.")
    let input = prompt();

    if(input !== 1 || input !== 2 || input != 3) {
        console.log("Something went wrong.");
        return;
    }
    else {
        if(input == 1) {

        }
    }
    return input;
}

function whoWon(playerChoice, AIChoice) {
    if(playerChoice == "Rock" && AIChoice == "Scissors") {
        scoreIncrease("Player");
    } 
    else if (playerChoice == "Scissors" && AIChoice == "Paper") {
        scoreIncrease("Player");
    } 
    else if(playerChoice == "Paper" && AIChoice == "") {
        scoreIncrease("Player");
    }
    else {
        scoreIncrease("");
    }
}

function scoreIncrease(player) {
    if(player == "Player") {
        playerScore += 1;
        console.log("Player Won!");
        console.log("Would you like to play again? (Y/N)");
    }
    else {
        console.log("AI Won!");
        console.log("Would you like to play again? (Y/N)");
        AIScore += 1;
    }
}

