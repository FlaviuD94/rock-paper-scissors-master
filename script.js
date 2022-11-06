"use strict";

const rulesBtn = document.querySelector("#rules-btn");
const closeBtn = document.querySelector("#close-toggler");
const playAgain = document.querySelectorAll(".play-again");
const playground = document.querySelector(".playground");
const choice3 = document.querySelector(".choice3-container");
const paper = document.querySelector("#paper-circle");
const sccisors = document.querySelector("#sccisors-circle");
const rock = document.querySelector("#rock-circle");
const circle = document.querySelectorAll(".circle");
const selectedPaper = document.querySelector("#paper-circle-selected");
const selectedRock = document.getElementById("rock-circle-selected");
const selectedSccisors = document.querySelector("#sccisors-circle-selected");
const randomPaper = document.querySelector("#paper-circle-random");
const randomRock = document.querySelector("#rock-circle-random");
const randomSccisors = document.querySelector("#sccisors-circle-random");
const awayScore = document.querySelector("#score-away");
const homeScore = document.querySelector("#score-home");
const loseBtn = document.querySelector("#lose");
const drawBtn = document.querySelector("#draw");
const winBtn = document.querySelector("#win");
const randomGround = document.querySelector("#lose-wave");
const selectedGround = document.querySelector("#win-wave");

const modal = document.querySelector(".modal");

rulesBtn.addEventListener("click", activeModal);
closeBtn.addEventListener("click", closeModal);
playAgain.forEach((btn) => {
  btn.addEventListener("click", resetGame);
});
paper.addEventListener("click", pickPaper);
rock.addEventListener("click", pickRock);
sccisors.addEventListener("click", pickSccisors);

function activeModal() {
  modal.classList.add("visible");
}

function closeModal() {
  modal.classList.remove("visible");
}

function resetGame() {
  playground.classList.add("hide");
  playground.classList.remove("flex");
  choice3.classList.add("flex");
  selectedPaper.classList.add("hide");
  selectedRock.classList.add("hide");
  selectedSccisors.classList.add("hide");
  drawBtn.classList.remove("display");
  loseBtn.classList.remove("display");
  winBtn.classList.remove("display");
  selectedGround.classList.add("hide");
  randomGround.classList.add("hide");

  updateScore();
  randomPick();
}

let selection;

function pickPaper() {
  choice3.classList.remove("flex");
  choice3.classList.add("hide");
  playground.classList.add("flex");
  selectedPaper.classList.remove("hide");
  randomPick();
  declareWinner(0);
}

function pickRock() {
  choice3.classList.remove("flex");
  choice3.classList.add("hide");
  playground.classList.add("flex");
  selectedRock.classList.remove("hide");
  randomPick();
  declareWinner(1);
}

function pickSccisors() {
  choice3.classList.remove("flex");
  choice3.classList.add("hide");
  playground.classList.add("flex");
  selectedSccisors.classList.remove("hide");
  randomPick();
  declareWinner(2);
}

let random;

function generateRandomNumber() {
  random = Math.floor(Math.random() * 3);
}
function randomPick() {
  generateRandomNumber();
  if (random === 0) {
    randomSccisors.classList.remove("flex");
    randomRock.classList.remove("flex");
    randomPaper.classList.add("flex");
    return (random = 0);
  }
  if (random === 1) {
    randomPaper.classList.remove("flex");
    randomSccisors.classList.remove("flex");
    randomRock.classList.add("flex");
    return (random = 1);
  }
  if (random === 2) {
    randomPaper.classList.remove("flex");
    randomRock.classList.remove("flex");
    randomSccisors.classList.add("flex");
    return (random = 2);
  }
}

let scoreHome = 0;
let scoreAway = 0;

function declareWinner(e) {
  selection = e;
  console.log(selection);
  console.log(random);
  if (selection === random) {
    drawBtn.classList.add("display");
    scoreAway++;
    scoreHome++;
  }
  if (selection === 0 && random === 1) {
    //Win
    winBtn.classList.add("display");
    selectedGround.classList.remove("hide");
    scoreHome += 3;
  }
  if (selection === 0 && random === 2) {
    //Lose
    loseBtn.classList.add("display");
    randomGround.classList.remove("hide");

    scoreAway += 3;
  }
  if (selection === 1 && random === 2) {
    //Win
    winBtn.classList.add("display");
    selectedGround.classList.remove("hide");

    scoreHome += 3;
  }
  if (selection === 1 && random === 0) {
    //Lose
    loseBtn.classList.add("display");
    randomGround.classList.remove("hide");

    scoreAway += 3;
  }
  if (selection === 2 && random === 0) {
    //Win
    winBtn.classList.add("display");
    selectedGround.classList.remove("hide");

    scoreHome += 3;
  }
  if (selection === 2 && random === 1) {
    //Lose
    loseBtn.classList.add("display");
    randomGround.classList.remove("hide");

    scoreAway += 3;
  }
}

function updateScore() {
  awayScore.textContent = scoreAway;
  homeScore.textContent = scoreHome;
}

updateScore();
