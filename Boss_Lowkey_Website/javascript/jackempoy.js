let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
    displayResult(playerChoice, computerChoice, winner);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = `Player: ${playerScore}`;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = `Computer: ${computerScore}`;
    }
}

function displayResult(playerChoice, computerChoice, winner) {
    if (winner === 'draw') {
        resultElement.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else {
        resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${winner === 'player' ? 'You win!' : 'Computer wins!'}`;
    }
}