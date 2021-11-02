let pcWin = 0;
let playerWin = 0;
let draws = 0;
let computerPlay;
let playerSelection;
let round = 0;

function game() {
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
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    playerSelection = "Rock";
    const choices = document.querySelector('.choices');
    const results = document.createElement('p');
    results.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
    choices.appendChild(results);
    playRound();
}
const paper = document.querySelector('.paper');
paper.onclick = () => {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    playerSelection = "Paper";
    const choices = document.querySelector('.choices');
    const results = document.createElement('p');
    results.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
    choices.appendChild(results);
    playRound();
}
const scissors = document.querySelector('.scissors');
scissors.onclick = () => {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    playerSelection = "Scissors";
    const choices = document.querySelector('.choices');
    const results = document.createElement('p');
    results.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
    choices.appendChild(results);
    playRound();
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
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Rock" && computerPlay == 'Scissors') {
        playerWin++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "You won!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Paper" && computerPlay == 'Scissors') {
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
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Paper" && computerPlay == 'Rock') {
        playerWin++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "You won!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Scissors" && computerPlay == 'Rock') {
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
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Scissors" && computerPlay == 'Paper') {
        playerWin++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "You won!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Rock" && computerPlay == 'Rock') {
        draws++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "It's a draw!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Paper" && computerPlay == 'Paper') {
        draws++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "It's a draw!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
    else if (playerSelection == "Scissors" && computerPlay == 'Scissors') {
        draws++;
        const matchResults = document.querySelector('.matchResults');
        const results = document.createElement('p');
        results.textContent = "It's a draw!";
        matchResults.appendChild(results);
        const playerScore = document.querySelector('.playerScore');
        const newPScore = document.createElement('p');
        newPScore.textContent = playerWin;
        playerScore.appendChild(newPScore);
        const pcScore = document.querySelector('.pcScore');
        const newCScore = document.createElement('p');
        newCScore.textContent = pcWin;
        pcScore.appendChild(newCScore);
        const drawsWin = document.querySelector('.draws');
        const drawsNo = document.createElement('p');
        drawsNo.textContent = draws;
        drawsWin.appendChild(drawsNo);
    }
}
}
game();



//if (pcWin > playerWin) {
    // alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". I won!");}
//else if (pcWin == playerWin) {
    //  alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". We drew!");}
//else {
    // alert("My score: " + pcWin + ". Your score: " + playerWin + ". Draws: " + draws + ". You won!");}