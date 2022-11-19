window.addEventListener("DOMContentLoaded", main);

const gameContainer = document.getElementById("game-container")
let scene = 0
let playerName

function main() {
    loadSceneSix()
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

function loadSceneThree() {
    console.log("scene3")
    scene = 3
    myAudio.setAttribute('src', "./happy.mp3");
    document.getElementById('game-container').innerHTML = ""

    let startImage = document.createElement("img")
    startImage.src = "./images/bg-city.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const skovdeCentrumText = document.createElement('div')
    skovdeCentrumText.className = ("centrum-text")
    skovdeCentrumText.textContent = "Skövde Centrum ligger bara ett par minuters promenad från resecentrum. Följ Hertig Johans gata rakt upp till det alldeles nyrenoverade Hertig Johans Torg som är en viktig mötesplats för Skövde. Från torget är det sedan lätt att orientera sig i centrum. Här finns ett brett utbud av shopping med både unika butiker och etablerade kedjor. Många av butikerna hittar du inne på Commerce, Skaraborgs första köpcentrum. "
    gameContainer.appendChild(skovdeCentrumText);

    const buttonDiv1 = document.createElement('div')
    buttonDiv1.className = "Scene-three-button-div"
    gameContainer.appendChild(buttonDiv1);

    const dayOrNightToggleButton = document.createElement("button");
    dayOrNightToggleButton.textContent = "Byt tid på dygnet ⛅️";
    dayOrNightToggleButton.className = "btn scene-three-button"
    buttonDiv1.appendChild(dayOrNightToggleButton);
    dayOrNightToggleButton.addEventListener('click', toggleNight);

    const goMcdonaldsButton = document.createElement("button");
    goMcdonaldsButton.textContent = "Gå till Mcdonalds 🍔";
    goMcdonaldsButton.className = "btn scene-three-button"
    buttonDiv1.appendChild(goMcdonaldsButton);
    goMcdonaldsButton.addEventListener("click", walkMcdonaldsAlert);

    const goHome = document.createElement("button");
    goHome.textContent = "Gå hem 🏠";
    goHome.className = "btn scene-three-button"
    buttonDiv1.appendChild(goHome);

    let dayOrNight = 1
    function toggleNight() {
        if (dayOrNight) {
            startImage.setAttribute('src', "./images/bg-city-night.png");
            dayOrNight = 0;
        }
        else {
            startImage.setAttribute('src', "./images/bg-city.png");
            dayOrNight = 1;
        }
    }
    function walkMcdonaldsAlert() {
        let Mcdonalds;
        if (dayOrNight) {
            alert ("You walk into MCdonalds!");
            Mcdonalds = true;
            myAudio.setAttribute('src', "./mcdonalds.wav");
            myAudio.volume = 0.5;
            console.log("test-1")
            dayOrNight = 1;
            loadSceneFive();
        }
        else {
            console.log("test-2")
            alert("Mcdonalds is closed! Come again tomorrow!")
            dayOrNight = 0;
        }
        
    }
    

}

function loadSceneFour() {
    console.log("scene4")
    scene = 4
    myAudio.setAttribute('src', "./happy.mp3");
    document.getElementById('game-container').innerHTML = ""

    const startImage = document.createElement("img")
    startImage.src = "./images/bg school.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const skovdeCentrumText = document.createElement('div')
    skovdeCentrumText.className = ("centrum-text")
    skovdeCentrumText.textContent = "Vid Högskolan i Skövde erbjuds utbildningar på både grundnivå och avancerad nivå inom områdena data och IT, dataspelsutveckling, ekonomi och samhälle, ingenjör, teknik och biovetenskap, vård och hälsa samt beteendevetenskap. Forskning bedrivs inom fem specialiseringar: informationsteknologi, systembiologi, virtual engineering, hälsa och lärande samt framtidens företagande."
    gameContainer.appendChild(skovdeCentrumText);

    const buttonDiv1 = document.createElement('div')
    buttonDiv1.className = "Scene-three-button-div"
    gameContainer.appendChild(buttonDiv1);

    const dayOrNightToggleButton = document.createElement("button");
    dayOrNightToggleButton.textContent = "Ansök till universitetet";
    dayOrNightToggleButton.className = "btn scene-three-button"
    buttonDiv1.appendChild(dayOrNightToggleButton);


    const backButton = document.createElement("button");
    backButton.textContent = "Gå till centrum";
    backButton.className = "btn scene-three-button"
    buttonDiv1.appendChild(backButton);
    backButton.addEventListener('click', loadSceneThree)
}
function loadSceneFive() {

    
    console.log("scene5")
    scene = 5
    document.getElementById('game-container').innerHTML = ""
   
    const startImage = document.createElement("img")
    startImage.src = "./images/mcdonuts_1.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const skovdeCentrumText = document.createElement('div')
    skovdeCentrumText.className = ("centrum-text mcdonalds-order")
    skovdeCentrumText.textContent = "Välkommen till Mcdonalds! Vad vill du beställa?"
    gameContainer.appendChild(skovdeCentrumText);

    const buttonDiv1 = document.createElement('div')
    buttonDiv1.className = "Scene-three-button-div mcdonalds-order-field"
    gameContainer.appendChild(buttonDiv1);

    const inputOrder = document.createElement("input")
    inputOrder.className = "input-order"
    buttonDiv1.appendChild(inputOrder);

    const addFoodButton = document.createElement('button')
    addFoodButton.className = "btn addfood-button"
    addFoodButton.textContent = "Lägg till"
    buttonDiv1.appendChild(addFoodButton);
    addFoodButton.addEventListener('click', addFoodToOrder)


    const orderListDiv = document.createElement('div')
    orderListDiv.className = ("order-list-div")
    addFoodButton.textContent = "Lägg till"
    gameContainer.appendChild(orderListDiv);


    const myOrder = document.createElement('ul')
    myOrder.className = ("my-order-list")
    myOrder.textContent = "Din beställning:"
    orderListDiv.appendChild(myOrder);

    const myOrderButton = document.createElement('button')
    myOrderButton.className = ("my-order-list my-order-list-button")
    myOrderButton.textContent = "Skicka order"
    orderListDiv.appendChild(myOrderButton);
    myOrderButton.addEventListener('click', clearOrder)

    function addFoodToOrder() {
        let newListItem = document.createElement('li')
        newListItem.textContent = inputOrder.value
        myOrder.appendChild(newListItem);
        inputOrder.value = ""
    }
    function clearOrder() {
        loadSceneFive()       
    }
    setTimeout(() => {
        console.log("Delayed for 60 second.");
        loadSceneSix();
      }, 30000)
    
}

function loadSceneSix() {
    console.log("Scene-6");
    myAudio.setAttribute('src', "./creepy.wav");
    myAudio.volume = 0.2;
    document.getElementById('game-container').innerHTML = ""

    const startImage = document.createElement("img")
    startImage.src = "./images/mcdonuts_1_dark.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const skovdeCentrumText = document.createElement('div')
    skovdeCentrumText.className = ("centrum-text mcdonk-six")
    skovdeCentrumText.textContent = "Vad händer? Det verkar som Mcdonalds stängt..."
    gameContainer.appendChild(skovdeCentrumText);



    setTimeout(() => {
        console.log("Delayed for 10 second.");
        skovdeCentrumText.textContent = "Dörrarna är låsta... Var tog personalen vägen?"

        const donk = document.createElement("img")
        donk.src = "./images/donk-0.png"
        donk.className = "donk"
        gameContainer.appendChild(donk);
        donk2()
     
        }, 2000)

    function donk2() {
        setTimeout(() => {
            console.log("Delayed for 10 second.");
            skovdeCentrumText.textContent = "Dörrarna är låsta... Var tog personalen vägen?"

            
    
    
            const donk = document.createElement("img")
            donk.src = "./images/donk-3.png"
            donk.className = "donk-3"
            gameContainer.appendChild(donk);
         
            }, 4000)
    }
    
    

}
