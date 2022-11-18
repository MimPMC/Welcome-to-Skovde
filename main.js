window.addEventListener("DOMContentLoaded", main);

const gameContainer = document.getElementById("game-container")
let scene = 0
let playerName

function main() {
    loadStartScene()
}

window.addEventListener('load', function(){
    let myAudio = document.getElementById("myAudio");
    myAudio.volume = 0.2;
    
    myAudio.onplaying = function() {
      isPlaying = true;
    };
    myAudio.onpause = function() {
      isPlaying = false;
    };
})
let isPlaying = false;
function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
        const toggleImg = document.getElementById("play-audio-button")
        toggleImg.src = "./stop-audio.png" 
    } else {
        myAudio.play();
        const toggleImg = document.getElementById("play-audio-button")
        toggleImg.src = "./play-audio.png"
    }
}   window.addEventListener('load', function(){
    let myAudio = document.getElementById("myAudio");
    
    myAudio.onplaying = function() {
      isPlaying = true;
   
    };
    myAudio.onpause = function() {
      isPlaying = false;
    };
});

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
            loadSceneTwo();
        }
    }
 }

 function loadSceneTwo () {
    scene = 1;
    document.getElementById('game-container').innerHTML = ""

    const startImage = document.createElement("img")
    startImage.src = "./skovde-bg.png"
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

    const button2 = document.createElement("button")
    button2.className = "button-choice-1 btn"
    button2.textContent = "Universitetet"
    buttonDiv.appendChild(button2);








    



 }