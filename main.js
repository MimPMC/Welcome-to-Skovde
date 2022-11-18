window.addEventListener("DOMContentLoaded", main);

const gameContainer = document.getElementById("game-container")
let scene = 0
let playerName

function main() {
    loadStartScene();

}

function playSound() {
    if (scene == 0 ) {
        const audio = new Audio('./creepy.wav');
        audio.volume = 0.2;
        audio.setAttribute = "loop"
        audio.play();
    }
}


function loadStartScene() {

    
    const startImage = document.createElement("img")
    startImage.src = "./skovde-bg.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const gameTitle = document.createElement("h1");
    gameTitle.textContent = "Välkommen till Skövde";
    gameTitle.className ="game-title"
    gameContainer.appendChild(gameTitle);

    const gameDescription= document.createElement("h3");
    gameDescription.textContent = "Vänligen fyll i ditt namn och börja utforska staden!";
    gameDescription.className ="game-description"
    gameContainer.appendChild(gameDescription);

    const inputName = document.createElement("input")
    inputName.className = "input-name"
    gameContainer.appendChild(inputName);

    const buttonStart = document.createElement("button")
    buttonStart.className = "button-start"
    buttonStart.textContent = "Start"
    gameContainer.appendChild(buttonStart);
    buttonStart.addEventListener("click", addName);

    function addName() {
        playerName = inputName.value;
        if (playerName == "") {
            alert("Enter First Name");
            
        }
        else {
            console.log(playerName)
        }
    }
 }
