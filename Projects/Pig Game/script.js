"use strict";

// "#" is used when we want to access the id and "." is used to access class
// both the below statements can be used to access score but on a large scale
// the getElementById tends to be faster
// score0El , score1El are elements and they don't store the score values
// declaring elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const current0EL = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let scores, playing, currentScore, activePlayer;
//starting values
const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1El.textContent = 0;

  diceEL.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();
const togglePlayers = function () {
  // set score of the current player score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // changing the active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // if class "player--active was present then it is removed and vice-versa"
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
// performing dice roll
btnRoll.addEventListener("click", function () {
  if (playing) {
    // generating a random dice value
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // displaying the dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${diceNumber}.png`;
    console.log(diceNumber);

    // check for 1
    if (diceNumber !== 1) {
      // add value to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      togglePlayers();
    }
  }
});

btnHold.addEventListener("click", function () {
  /* TO DO
  1. Make current score 0
  2. Update total score of the current player
  3. Check if score >= 100 finish game or switch player
  
  */
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      // finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEL.classList.add("hidden");
    } else {
      togglePlayers();
    }
  }
});

// to reset the game
btnNew.addEventListener("click", init);
