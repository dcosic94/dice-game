let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

const message = document.getElementById("message");
const playerOneScoreboard = document.getElementById("player1Scoreboard");
const playerTwoScoreboard = document.getElementById("player2Scoreboard");
const playerOneDice = document.getElementById("player1Dice");
const playerTwoDice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function displayBtn() {
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
};


rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random()* 6 + 1);

    if(playerOneTurn) {
        playerOneDice.textContent = randomNumber;
        playerOneDice.classList.remove("active")
        playerTwoDice.classList.add("active");
        message.textContent = "Player 2 Turn"
        playerOneScore += randomNumber;
        playerOneScoreboard.textContent = playerOneScore;
        playerOneTurn = false;
    } else {
        playerTwoDice.textContent = randomNumber;
        playerTwoDice.classList.remove("active");
        playerOneDice.classList.add("active");
        message.textContent = "Player 1 Turn";
        playerTwoScore += randomNumber;
        playerTwoScoreboard.textContent = playerTwoScore;
        playerOneTurn = true;
    }

    if(playerOneScore >= 20) {
        message.textContent = "Player 1 has won!"
        displayBtn();
    } else if (playerTwoScore >= 20) {
        message.textContent = "Player 2 has won!";
        displayBtn();
    } 
});

resetBtn.addEventListener('click', function(){
    playerOneTurn = true;
    playerOneScoreboard.textContent = 0;
    playerTwoScoreboard.textContent = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDice.textContent = "-";
    playerTwoDice.textContent = "-";
    message.textContent = "Player 1 turn"
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
});