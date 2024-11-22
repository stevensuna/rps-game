// Đợi cho DOM load hoàn tất trước khi chạy code
// Wait for DOM to be fully loaded before running code
document.addEventListener('DOMContentLoaded', () => {
    // Mảng chứa các lựa chọn có thể của trò chơi
    // Array of possible game choices
    const choices = ['rock', 'paper', 'scissors'];
    
    // Lấy tất cả các nút trong game
    // Get all game buttons
    const buttons = document.querySelectorAll('.game-btn');
    
    // Lấy phần tử hiển thị kết quả và điểm số
    // Get result and score display elements
    const resultDisplay = document.getElementById('game-result');
    const scoreDisplay = document.getElementById('score');
    
    // Biến lưu điểm số
    // Variable to store the score
    let score = 0;

    // Hàm để máy tính lựa chọn ngẫu nhiên
    // Function for computer to make random choice
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Hàm xác định người thắng dựa trên lựa chọn của người chơi và máy
    // Function to determine winner based on player and computer choices
    function determineWinner(playerChoice, computerChoice) {
        // Nếu 2 lựa chọn giống nhau thì hòa
        // If choices are the same, it's a draw
        if (playerChoice === computerChoice) return 'draw';
        
        // Object định nghĩa điều kiện thắng
        // Object defining winning conditions
        const winConditions = {
            rock: 'scissors',     // đá thắng kéo / rock beats scissors
            paper: 'rock',        // giấy thắng đá / paper beats rock
            scissors: 'paper'     // kéo thắng giấy / scissors beats paper
        };

        // Kiểm tra điều kiện thắng và trả về kết quả
        // Check win condition and return result
        return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
    }

    // Hàm cập nhật điểm số
    // Function to update the score
    function updateScore(result) {
        if (result === 'win') score++;      // Thắng +1 điểm / Win +1 point
        if (result === 'lose') score--;     // Thua -1 điểm / Lose -1 point
        scoreDisplay.textContent = score;    // Hiển thị điểm mới / Display new score
    }

    // Hàm xử lý một lượt chơi
    // Function to handle one round of play
    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        // Object chứa các thông báo kết quả
        // Object containing result messages
        const messages = {
            win: `You win! ${playerChoice} beats ${computerChoice}`,
            lose: `You lose! ${computerChoice} beats ${playerChoice}`,
            draw: `It's a draw! Both chose ${playerChoice}`
        };
        
        // Hiển thị kết quả và cập nhật điểm
        // Display result and update score
        resultDisplay.textContent = messages[result];
        updateScore(result);
    }

    // Thêm event listener cho mỗi nút
    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            playRound(e.target.dataset.choice);
        });
    });
});