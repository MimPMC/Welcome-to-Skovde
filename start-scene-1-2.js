window.addEventListener("DOMContentLoaded", main);

const gameContainer = document.getElementById("game-container")
let scene = 0
let playerName
let myAudio = new Audio('creepy.wav');
//De första scenerna 
function main() {
    loadStartScene()
}

function loadStartScene() {
    myAudio.setAttribute('src', "./creepy.wav");
    myAudio.play();
    myAudio.volume = 0.3;
    myAudio.loop = true;

    document.getElementById("game-container").innerHTML = "";
    const startImage = document.createElement("img")
    startImage.src = "./images/skovde-bg.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const gameTitle = document.createElement("h1");
    gameTitle.textContent = "Välkommen till Skövde";
    gameTitle.className ="game-title"
    gameContainer.appendChild(gameTitle);

    const gameIntroduction = document.createElement('div')
    gameIntroduction.className ="game-description-div"
    gameContainer.appendChild(gameIntroduction);

    const gameDescription= document.createElement("h3");
    gameDescription.textContent = "Skövde är en stad med goda kommunikationer som ligger centralt mellan Sveriges största sjöar, Vänern och Vättern. Här vill fler alltid mer. ";
    gameDescription.className ="game-description"
    gameIntroduction.appendChild(gameDescription);

    const gameDescription1= document.createElement("h3");
    gameDescription1.textContent = "Vänligen fyll i ditt namn och börja utforska staden!";
    gameDescription1.className ="game-description-1"
    gameContainer.appendChild(gameDescription1);

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
            loadSceneTwo();
        }
    }
 }

 function loadSceneTwo () {
    myAudio.play();
    myAudio.loop = true;
    myAudio.volume = 0.3;

    console.log("scene2")
    scene = 1;
    document.getElementById('game-container').innerHTML = ""

    const startImage = document.createElement("img")
    startImage.src = "./images/scene-2.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const gameTitle = document.createElement("h1");
    gameTitle.textContent = "Hej, "+ playerName + "! Vart vill du gå?";
    gameTitle.className ="game-title"
    gameContainer.appendChild(gameTitle);

    const buttonDiv = document.createElement('div');
    buttonDiv.className ="button-div-scene-2"
    gameContainer.appendChild(buttonDiv);

    const button1 = document.createElement("button")
    button1.className = "button-choice-1 btn"
    button1.textContent = "Centrum"
    buttonDiv.appendChild(button1);
    button1.addEventListener("click", loadSceneThree);

    const button2 = document.createElement("button")
    button2.className = "button-choice-1 btn"
    button2.textContent = "Universitetet"
    buttonDiv.appendChild(button2);
    button2.addEventListener("click", loadSceneFour);

}

