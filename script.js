// script.js
document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.game-btn');
    const resultDisplay = document.getElementById('game-result');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return 'draw';
        
        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
    }

    function updateScore(result) {
        if (result === 'win') score++;
        if (result === 'lose') score--;
        scoreDisplay.textContent = score;
    }

    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        const messages = {
            win: `You win! ${playerChoice} beats ${computerChoice}`,
            lose: `You lose! ${computerChoice} beats ${playerChoice}`,
            draw: `It's a draw! Both chose ${playerChoice}`
        };

        resultDisplay.textContent = messages[result];
        updateScore(result);
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            playRound(e.target.dataset.choice);
        });
    });
});