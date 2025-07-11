let choice;
let color;

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
