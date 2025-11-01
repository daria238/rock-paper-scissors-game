let userChoice;
let userColor;
let computerChoice
let computerColor
let userScore = 0;
let computerScore = 0;

let gameOutcome = "";

function loadScores() {
  let storedUserScore = localStorage.getItem("user");
  let storedComputerScore = localStorage.getItem("computer");
  if (storedUserScore == null) {
    userScore = 0;
  } else {
    userScore = parseInt(storedUserScore);
  }
  if (storedComputerScore == null) {
    computerScore = 0;
  } else {
    computerScore = parseInt(storedComputerScore);
  }

  alert("userScore: " + userScore);
  alert("computerScore: " + computerScore);
}

function showRulesModal() {
  document.getElementById("rules-modal").classList.remove("hidden");
}

function hideRulesModal() {
  document.getElementById("rules-modal").classList.add("hidden");
}

function trackUserChoice(element) {
  userChoice = element.id;
  userColor = element.classList[1];

  document.getElementById("step-one").style.display = "none";
  document.getElementById("step-two").classList.remove("hidden");
  document.getElementById("step-two").style.display = "block";

  setUserChoiceDiv();
  setComputerChoiceDiv();
}

function setUserChoiceDiv() {
  let userChoiceDiv = document.getElementById("user-choice-div");

  let circleButtonDiv = document.createElement('div');
  circleButtonDiv.classList.add("circle-button");
  circleButtonDiv.classList.add(userColor);

  let innerCircleDiv = document.createElement("div");
  innerCircleDiv.classList.add("inner-circle");

  let imageIcon = document.createElement("img");
  imageIcon.src = "images/icon-" + userChoice + ".svg";

  innerCircleDiv.appendChild(imageIcon);
  circleButtonDiv.appendChild(innerCircleDiv);
  userChoiceDiv.appendChild(circleButtonDiv);
}

/*
<div class="circle-row center-row" id="user-choice-div">
          <div class="circle-button red">
            <div class="inner-circle">
              <img src="images/icon-rock.svg" alt="Rock" />
            </div>
          </div>
        </div>
*/

function setComputerChoiceDiv() {
  let computerChoiceDiv = document.getElementById("computer-choice-div");
  computerChoiceDiv.innerHTML = "";

  let spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.id = "computer-loading-spinner";
  computerChoiceDiv.appendChild(spinner);

  setTimeout(() => {
    computerChoiceDiv.innerHTML = "";

    computerChoice = makeComputerIconChoice();

    let circleButtonDiv = document.createElement("div");
    circleButtonDiv.classList.add("circle-button");
    circleButtonDiv.classList.add(computerColor);

    let innerCircleDiv = document.createElement("div");
    innerCircleDiv.classList.add("inner-circle");

    let imageIcon = document.createElement("img");
    imageIcon.src = "images/icon-" + computerChoice + ".svg";

    innerCircleDiv.appendChild(imageIcon);
    circleButtonDiv.appendChild(innerCircleDiv);
    computerChoiceDiv.appendChild(circleButtonDiv);

    pickWinner();

    document.getElementById("game-outcome-wrap").style.display = "block";
    document.getElementById("game-outcome-text").innerHTML = gameOutcome;
    document.getElementById("play-again-button").style.display = "block";

    document.getElementById("user-score-div").innerHTML = userScore;
    document.getElementById("computer-score-div").innerHTML = computerScore;
  }, 1000);
}

function getRandomNumberInRange(min, max) {
  let randomNumber = Math.random();
  return Math.floor(randomNumber * max) + min;
}

function makeComputerIconChoice() {
  let randomNumber = getRandomNumberInRange(1, 3);
  if (randomNumber == 1) {
    computerColor = "red";
    return "rock";
  } else if (randomNumber == 2) {
    computerColor = "blue";
    return "paper";
  } else if (randomNumber == 3) {
    computerColor = "yellow";
    return "scissors";
  }
}

function pickWinner() {
  if (userChoice == "rock") {
    if (computerChoice == "rock") {
      gameOutcome = "It's a tie";
    } else if (computerChoice == "paper") {
      gameOutcome = "You lose";
      computerScore++;
    } else {
      gameOutcome = "You win";
      userScore++;
    }
  }

    else if (userChoice == "paper") {
    if (computerChoice == "rock") {
      gameOutcome = "You won";
      userScore++;
    } else if (computerChoice == "paper") {
      gameOutcome = "It's a tie";
    } else {
      gameOutcome = "You lost";
      computerScore++;
    }
  }

  else if (userChoice == "scissors") {
    if (computerChoice == "rock") {
      gameOutcome = "You lose";
      computerScore++;
    } else if (computerChoice == "paper") {
      gameOutcome = "You win";
      userScore++;
    } else {
      gameOutcome = "It's a tie";
    }
  }
}