// "use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable - because it is part of the application state
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // if no value entered
  if (!guess) {
    displayMessage("Not a number!");
  }

  // if value matches with sectet number
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage("Correct Number!");
    console.log("Score:" + score);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // if values does not match
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      document.querySelector(".score").textContent = --score;
    } else {
      displayMessage("You lost the game");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".highscore").textContent = highscore;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  displayMessage("Start guessing the number!");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
