let choice;
let color;
let computerChoice
let computerColor

function showRulesModal() {
    document.getElementById("rules-modal").classList.remove("hidden");
}

function hideRulesModal() {
    document.getElementById("rules-modal").classList.add("hidden");
}

function trackUserChoice(element) {
    choice = element.id;
    color = element.classList[1];

    document.getElementById("step-one").style.display="none";
    document.getElementById("step-two").classList.remove("hidden");
    document.getElementById("step-two").style.display="block";

    setUserChoiceDiv();
    setComputerChoiceDiv();
}

function setUserChoiceDiv() {
    let userChoiceDiv = document.getElementById("user-choice-div");

    let circleButtonDiv = document.createElement('div');
    circleButtonDiv.classList.add("circle-button");
    circleButtonDiv.classList.add(color);

    let innerCircleDiv = document.createElement("div");
    innerCircleDiv.classList.add("inner-circle");

    let imageIcon = document.createElement("img");
    imageIcon.src = "images/icon-" + choice + ".svg";
    
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
    computerChoice = makeComputerIconChoice();
    let computerChoiceDiv = document.getElementById("computer-choice-div");

    let circleButtonDiv = document.createElement('div');
    circleButtonDiv.classList.add("circle-button");
    circleButtonDiv.classList.add(computerColor);

    let innerCircleDiv = document.createElement("div");
    innerCircleDiv.classList.add("inner-circle");

    let imageIcon = document.createElement("img");
    imageIcon.src = "images/icon-" + computerChoice + ".svg";
    
    innerCircleDiv.appendChild(imageIcon);
    circleButtonDiv.appendChild(innerCircleDiv);
    computerChoiceDiv.appendChild(circleButtonDiv);
}

function getRandomNumberInRange(min, max) {
    let randomNumber = Math.random();
    return Math.floor(randomNumber * max) + min;
}

function makeComputerIconChoice() {
    let randomNumber = getRandomNumberInRange(1, 3);
    if(randomNumber == 1) {
      computerColor = "red";
      return "rock";
    } else if(randomNumber == 2) {
      computerColor = "blue";
      return "paper";
    } else if(randomNumber == 3) {
      computerColor = "yellow";
      return "scissors";
    }
}

