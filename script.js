let pcWin = 0;
let playerWin = 0;
let draws = 0;
let computerPlay;
let playerSelection;
//let round = 4;

const plpcChoices = document.querySelector('.toCancel');
const bothChoices = document.createElement('p');
plpcChoices.appendChild(bothChoices);

const matchResults = document.querySelector('.toCancel');
const results = document.createElement('p');
matchResults.appendChild(results);

const playerScore = document.querySelector('.playerScore');
const newPScore = document.createElement('p');

playerScore.appendChild(newPScore);
const pcScore = document.querySelector('.pcScore');
const newCScore = document.createElement('p');

pcScore.appendChild(newCScore);
const drawsWin = document.querySelector('.draws');
const drawsNo = document.createElement('p');

drawsWin.appendChild(drawsNo);



if (Math.random() < 0.33) {
    computerPlay = "Rock";
}
else if (Math.random() < 0.66) {
    computerPlay = "Paper";
}
else {
    computerPlay = "Scissors";
}

function choices() {
    document.querySelector('.toCancel');
    bothChoices.textContent = "You chose: " + playerSelection + ". The computer chose: " + computerPlay + ".";
}

const rock = document.querySelector('.rock');
rock.onclick = () => {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    playerSelection = "Rock";
    choices();
    playRound();
    roundFive();
}
const paper = document.querySelector('.paper');
paper.onclick = () => {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    playerSelection = "Paper";
    choices();
    playRound();
    roundFive();
}
const scissors = document.querySelector('.scissors');
scissors.onclick = () => {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
    playerSelection = "Scissors";
    choices();
    playRound();
    roundFive();
}

function playRound() {
    if (playerSelection == "Rock" && computerPlay == 'Paper') {
        pcWin++;
        document.querySelector('.toCancel');
        results.textContent = "You lost!";
        updateScore();
    }
    else if (playerSelection == "Rock" && computerPlay == 'Scissors') {
        playerWin++;
        document.querySelector('.toCancel');
        results.textContent = "You won!";
        updateScore();
    }
    else if (playerSelection == "Paper" && computerPlay == 'Scissors') {
        pcWin++;
        document.querySelector('.toCancel');
        results.textContent = "You lost!";
        updateScore();
    }
    else if (playerSelection == "Paper" && computerPlay == 'Rock') {
        playerWin++;
        document.querySelector('.toCancel');
        results.textContent = "You won!";
        updateScore();
    }
    else if (playerSelection == "Scissors" && computerPlay == 'Rock') {
        pcWin++;
        document.querySelector('.toCancel');
        results.textContent = "You lost!";
        updateScore();
    }
    else if (playerSelection == "Scissors" && computerPlay == 'Paper') {
        playerWin++;
        document.querySelector('.toCancel');
        results.textContent = "You won!";
        updateScore();
    }
    else if (playerSelection == "Rock" && computerPlay == 'Rock') {
        draws++;
        document.querySelector('.toCancel');
        results.textContent = "It's a draw!";
        updateScore();
    }
    else if (playerSelection == "Paper" && computerPlay == 'Paper') {
        draws++;
        document.querySelector('.toCancel');
        results.textContent = "It's a draw!";
        updateScore();
    }
    else if (playerSelection == "Scissors" && computerPlay == 'Scissors') {
        draws++;
        document.querySelector('.toCancel');
        results.textContent = "It's a draw!";
        updateScore();
    }
}

function updateScore() {
    document.querySelector('.playerScore');
    newPScore.textContent = playerWin;
    document.querySelector('.pcScore');
    newCScore.textContent = pcWin;
    document.querySelector('.draws');
    drawsNo.textContent = draws;
}


const next = document.querySelector('.next');
next.onclick = () => {
    document.querySelector('.rock').disabled = false;
    document.querySelector('.paper').disabled = false;
    document.querySelector('.scissors').disabled = false;
    document.querySelector('.toCancel');
    results.textContent = "";
    document.querySelector('.toCancel');
    bothChoices.textContent = "";
}
function roundFive() {
    if (pcWin + playerWin + draws == 5) {
        const fifthRound = document.querySelector('.fifthRound');
        const end = document.createElement('p');
        fifthRound.appendChild(end);
        document.querySelector('.next').disabled = true;
        if (pcWin > playerWin) {
            end.textContent = "The computer won. You can do better next time!";
        }
        else if (playerWin > pcWin) {
            end.textContent = "You won! Congratulations!"
        }
    }
}
