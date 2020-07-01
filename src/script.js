let pickRoll_dice = document.querySelector(".roll-dice");
let pickfinal_score_1 = document.querySelector(".final_score-1");
let pickfinal_score_2 = document.querySelector(".final_score-2");
let pickcurrent_score_1 = document.querySelector(".current-score-1");
let pickcurrent_score_2 = document.querySelector(".current-score-2");
let pickHold = document.querySelector(".hold");
let pick_allDice = document.querySelector(".all-dice");
let ResetGame = document.querySelector(".new-game");

pickfinal_score_1.textContent = 0;
pickfinal_score_2.textContent = 0;
pickcurrent_score_1.textContent = 0;
pickcurrent_score_2.textContent = 0;
let roundScore, currentPlayer, finalScore, gamePlaying;
roundScore = 0;
currentPlayer = 1;
finalScore = [0, 0, 0];

console.log(gamePlaying, "gamePlayinggamePlaying");

///////////////////////////
init();
pickRoll_dice.addEventListener("click", funRollDice);

function funRollDice() {
  if (gamePlaying) {
    let saveRandomNo = Math.floor(Math.random() * 6) + 1;

    let pickDice = document.querySelector(`.dice${saveRandomNo}`);
    let notPick = pick_allDice.querySelectorAll(
      `div:not(.dice${saveRandomNo})`
    );
    pick_allDice.style.display = "block";

    if (pickDice.classList.contains(`dice${saveRandomNo}`)) {
      pickDice.style.display = "block";
      notPick.forEach(function (each) {
        each.style.display = "none";
        console.log(each, "each box");
      });
      // pickDice.style.display = "none";
    }
    if (saveRandomNo !== 1) {
      //add score
      roundScore += saveRandomNo;
      console.log(roundScore, "roundScoreroundScore");
      document.querySelector(
        ".current-score-" + currentPlayer
      ).textContent = roundScore;
    } else {
      //next player
      nextPlayer();
    }
  }
}
///hold btn
pickHold.addEventListener("click", funHold_And_AddTo_Final);

function funHold_And_AddTo_Final() {
  if(gamePlaying) {
    finalScore[currentPlayer] += roundScore;
    document.querySelector(".final_score-" + currentPlayer).textContent =
      finalScore[currentPlayer];
    console.log(finalScore, "finalScorefinalScorefinalScore");
    //check if player won the game
    if (finalScore[currentPlayer] >= 20) {
      let Winner = document.querySelector(".player-" + currentPlayer);

      Winner.textContent = "WINNER!";
      Winner.style.color = "red";
      Winner.style.fontSize = "25px";
      pick_allDice.style.display = "none";
      document
        .querySelector(".redCircle_" + currentPlayer)
        .classList.remove("active");
      gamePlaying = false;
      console.log(gamePlaying,'gamePlayingfalse')
    } else {
      nextPlayer();
    }
  }
}
console.log(roundScore, "roundScoreroundScore");

function nextPlayer() {
  currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);
  roundScore = 0;
  document.querySelector(".current-score-1").textContent = 0;
  document.querySelector(".current-score-2").textContent = 0;
  document.querySelector(".redCircle_1").classList.toggle("active");
  document.querySelector(".redCircle_2").classList.toggle("active");
  document.querySelector(".player1").classList.toggle("activePlayer");
  document.querySelector(".player2").classList.toggle("activePlayer");
  pick_allDice.style.display = "none";
}
///reset
ResetGame.addEventListener("click", init);

function init() {
  gamePlaying = true;
  pickfinal_score_1.textContent = 0;
  pickfinal_score_2.textContent = 0;
  pickcurrent_score_1.textContent = 0;
  pickcurrent_score_2.textContent = 0;
  roundScore = 0;
  currentPlayer = 1;
  finalScore = [0, 0, 0];
  pick_allDice.style.display = "none";
  let Winner1 = document.querySelector(".player-1");
  Winner1.textContent = "PLAYER 1";
  let Winner2 = document.querySelector(".player-2");
  Winner2.textContent = "PLAYER 2";
  console.log("Winner2", Winner2);
        Winner1.style.color = "";
      Winner1.style.fontSize = "20px";
          Winner2.style.color = "";
      Winner2.style.fontSize = "20px";
   document.querySelector(".redCircle_1").classList.add("active");
  document.querySelector(".redCircle_2").classList.remove("active");
  
  document.querySelector(".player1").classList.add("activePlayer");
  document.querySelector(".player2").classList.remove("activePlayer");
}
console.log(finalScore, "finalScorefinalScore");
console.log(gamePlaying, "gamePlayinggamePlaying");
