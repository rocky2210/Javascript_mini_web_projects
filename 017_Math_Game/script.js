// Define variables
const operators = ['+', '-', '*', '/']; // Define operators
let num1, num2, operator, answer;
let points = 0;
let lives = 3;
let timeLeft = 30;
let timerInterval;
let gameStarted = false;

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random operator
function getRandomOperator() {
  return operators[Math.floor(Math.random() * operators.length)];
}

// Function to generate a new question
function generateQuestion() {
  num1 = getRandomInt(1, 10);
  num2 = getRandomInt(1, 10);
  operator = getRandomOperator();
  // Display the question
  document.getElementById('question').innerHTML = `${num1} ${operator} ${num2} = `;
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById('time-left').textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      lives--;
      document.getElementById('lives').innerHTML = '❤️ '.repeat(lives); // Update heart emojis
      if (lives === 0) {
        gameOver();
      } else {
        resetTimer();
        generateQuestion();
        startTimer(); // Restart the timer for the next question
      }
    }
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  timeLeft = 30;
  document.getElementById('time-left').textContent = timeLeft;
}

// Function to check the answer
function checkAnswer() {
  if (!gameStarted) return; // Don't proceed if the game hasn't started
  let userAnswer = parseFloat(document.getElementById('result').value);
  if (isNaN(userAnswer)) {
    document.getElementById('error-msg').innerHTML = 'Please enter a valid number!';
  } else {
    answer = eval(`${num1} ${operator} ${num2}`);
    if (userAnswer === answer) {
      document.getElementById('error-msg').innerHTML = '';
      document.getElementById('result').value = '';
      points += 10;
      document.getElementById('points').innerHTML = `Points: ${points}`;
      resetTimer();
      generateQuestion();
      
    } else {
      lives--;
      document.getElementById('lives').innerHTML = '❤️ '.repeat(lives); // Update heart emojis
      if (lives === 0) {
        gameOver();
      } else {
        document.getElementById('error-msg').innerHTML = `Incorrect answer, try again!`;
      }
    }
  }
}

// Function to handle game over
function gameOver() {
  clearInterval(timerInterval);
  document.getElementById('result').disabled = true;
  document.getElementById('submit-btn').disabled = true;
  document.getElementById('error-msg').innerHTML = ''; // Clear error message
  displayGameOverModal();
}

// Function to reset the game
function resetGame() {
  points = 0;
  lives = 3;
  timeLeft = 30;
  document.getElementById('points').innerHTML = `Points: ${points}`;
  document.getElementById('lives').innerHTML = '❤️ ❤️ ❤️'; // Reset heart emojis
  document.getElementById('time-left').textContent = timeLeft;
  document.getElementById('result').disabled = false;
  document.getElementById('submit-btn').disabled = false;
  generateQuestion();
  startTimer();
  gameStarted = true;
}

// Get the modal
let modal = document.getElementById("game-over-modal");

// Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("close")[0];

// Get the restart button
let restartBtn = document.getElementById("restart-btn");

// Function to display game over modal
function displayGameOverModal() {
  document.getElementById("final-score").textContent = points;
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// When the user clicks on the restart button, reset the game and close the modal
restartBtn.onclick = function () {
  resetGame();
  closeModal();
};

// Event listener for the start button
document.getElementById('start-btn').addEventListener('click', function() {


  generateQuestion();
  startTimer();
  gameStarted = true;
  document.getElementById('intro-text').style.display = 'none';
  document.getElementById('start-btn').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'block';
  document.getElementById('result').style.display = 'inline-block';
  document.getElementById('timer').style.display = 'block';
  document.getElementById('points').style.display = 'block';
  document.getElementById('lives').style.display = 'block';
  document.getElementById('error-msg').style.display = 'block';
});

// Event listener for the submit button
document.getElementById('submit-btn').addEventListener('click', function() {
  checkAnswer();
});
