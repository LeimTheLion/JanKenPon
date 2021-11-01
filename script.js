let pcWin = 0;
let playerWin = 0;
let draws = 0;
let computerPlay;
let playerSelection;


if (Math.random() < 0.33) {
    computerPlay = "Rock";
}
else if (Math.random() < 0.66) {
    computerPlay = "Paper";
}
else {
    computerPlay = "Scissors";
}

const rock = document.querySelector('.rock');
rock.onclick = () => {
    playerSelection = "Rock";
    const choices = document.querySelector('.choices');
    const results = document.createElement('p');
    results.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
    choices.appendChild(results);
    playRound();
}
const paper = document.querySelector('.paper');
paper.onclick = () => {
    playerSelection = "Paper";
    const choices = document.querySelector('.choices');
    const results = document.createElement('p');
    results.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
    choices.appendChild(results);
}
const scissors = document.querySelector('.scissors');
scissors.onclick = () => {
    playerSelection = "Scissors";
    const choices = document.querySelector('.choices');
    const results = document.createElement('p');
    results.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
    choices.appendChild(results);
}

function playRound() {
    if (playerSelection == "Rock" && computerPlay == 'Paper') {
        pcWin++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "You lost!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
    }
}





//if (pcWin > playerWin) {
    // alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". I won!");}
//else if (pcWin == playerWin) {
    //  alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". We drew!");}
//else {
    // alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". You won!");}