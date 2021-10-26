let pcWin = 0;
let playerWin = 0;
let draws = 0;

function game() {

    let computerPlay;
    if (Math.random() < 0.33) {
        computerPlay = "Rock";
    }
    else if (Math.random() < 0.66) {
        computerPlay = "Paper";
    }
    else {
        computerPlay = "Scissors";
    }

    let playerSelection = prompt("Choose your move!").toLowerCase();

    function playRound() {
        if (playerSelection == "rock" && computerPlay == 'Paper') {
            pcWin++;
            alert("I chose Paper, so you lose! Paper beats Rock");
        }
        else if (playerSelection == "rock" && computerPlay == 'Scissors') {
            playerWin++;
            alert("I chose Scissors, so you win! Rock beats Scissors");
        }
        else if (playerSelection == "rock" && computerPlay == 'Rock') {
            draws++;
            alert("I chose Rock too, so it's a draw!");
        }
        else if (playerSelection == "paper" && computerPlay == 'Scissors') {
            pcWin++;
            alert("I chose Scissors, so you lose! Scissors beats Paper");
        }
        else if (playerSelection == "paper" && computerPlay == 'Rock') {
            playerWin++;
            alert("I chose Rock, so you win! Paper beats Rock");
        }
        else if (playerSelection == "paper" && computerPlay == 'Paper') {
            draws++;
            alert("I chose Paper too, so it's a draw!");
        }
        else if (playerSelection == "scissors" && computerPlay == 'Rock') {
            pcWin++;
            alert("I chose Rock, so you lose! Rock beats Scissors");
        }
        else if (playerSelection == "scissors" && computerPlay == 'Paper') {
            playerWin++;
            alert("I chose Paper, so you win! Scissors beat Paper");
        }
        else if (playerSelection == "scissors" && computerPlay == 'Scissors') {
            draws++;
            alert("I chose Scissors too, so it's a draw!");
        }
        else
            alert("Hey! Don't mess with me!");
    }

    playRound();
    console.log(pcWin);
    console.log(playerWin);
    console.log(draws);
}

game();
game();
game();
game();
game();

if (pcWin > playerWin) {
    alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". I won!");
}
else if (pcWin == playerWin) {
    alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". We drew!");
}
else {
    alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". You won!");
}