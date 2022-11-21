function loadSceneFive() {
  myAudio.setAttribute('src', "./mcdonalds.wav");
  myAudio.play();
  myAudio.volume = 0.4;
  myAudio.loop = true;


    console.log("scene5")
    scene = 5
    document.getElementById('game-container').innerHTML = ""
   
    const startImage = document.createElement("img")
    startImage.src = "./images/mcdonuts_1.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const addEscapebutton = document.createElement('button')
    addEscapebutton.className = "btn escape"
    addEscapebutton.textContent = "Gå ut"
    gameContainer.appendChild(addEscapebutton);
    addEscapebutton.addEventListener('click', loadSceneThree)

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

    const eatFood = document.createElement('button')
    eatFood.className = "btn stay"
    eatFood.textContent = "Stanna kvar och ät"
    gameContainer.appendChild(eatFood);
    eatFood.addEventListener('click', makeMcdonaldsNight)


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

    function makeMcdonaldsNight() {
      setTimeout(() => {
        console.log("Delayed for 5 second.");
        loadSceneSix();
      }, 5000)
    }

    
}

function loadSceneSix() {

  console.log("Scene-6");
  myAudio.setAttribute("src", "./creepy-mc.wav");
  myAudio.play();
  myAudio.volume = 0.2;
  document.getElementById("game-container").innerHTML = "";

  const startImage = document.createElement("img");
  startImage.src = "./images/mcdonuts_1_dark.png";
  startImage.className = "start-bg-img";
  gameContainer.appendChild(startImage);

  const skovdeCentrumText = document.createElement("div");
  skovdeCentrumText.className = "centrum-text mcdonk-six";
  skovdeCentrumText.textContent =
    "Vad händer? Det verkar som Mcdonalds stängt...";
  gameContainer.appendChild(skovdeCentrumText);

  const donk = document.createElement("img");
  donk.src = "./images/donk-0.png";
  donk.className = "donk";
  gameContainer.appendChild(donk);
  donk.style.visibility = "hidden";

  const donk3 = document.createElement("img");
  donk3.src = "./images/donk-3.png";
  donk3.className = "donk-3";
  gameContainer.appendChild(donk3);
  donk3.style.visibility = "hidden";

  const donk4 = document.createElement("img");
  donk4.src = "./images/donk-4.png";
  donk4.className = "donk-4";
  gameContainer.appendChild(donk4);
  donk4.style.visibility = "hidden";

  const donk5 = document.createElement("img");
  donk5.src = "./images/donk-5.png";
  donk5.className = "donk-5";
  gameContainer.appendChild(donk5);
  donk5.style.visibility = "hidden";

  setTimeout(() => {
    console.log("donk1.");
    skovdeCentrumText.textContent =
      "Dörrarna är låsta... Var tog personalen vägen?";
    donk.style.visibility = "visible";
    addEscapebutton.style.visibility = "hidden";
    
  }, 7000);

  setTimeout(() => {
    console.log("donk3.");
    donk.style.visibility = "hidden";
    skovdeCentrumText.textContent =
      "Hallå? Är det någon där?";
    donk3.style.visibility = "visible";
    
    
  }, 15000);

    setTimeout(() => {
    console.log("donk4.");

    skovdeCentrumText.textContent =
      "Ronald mcdonald stirrar på dig...";
    donk3.style.visibility = "hidden";
    donk4.style.visibility = "visible";   
  }, 23000);

  setTimeout(() => {
    skovdeCentrumText.style.visibility = "hidden";
    console.log("donk5.");
    donk4.style.visibility = "hidden";
    myAudio.setAttribute('src', "./screech.wav");
    myAudio.play();
    myAudio.loop = false;
    donk5.style.visibility = "visible";
    
  }, 28000);
  setTimeout(() => {
    loadSceneSeven() 
  }, 29500);
  
}

function loadSceneSeven() {
    document.getElementById("game-container").innerHTML = "";
    const blackBg = document.createElement("div");
    blackBg.src = "./images/black.png";
    blackBg.className = "black-bg";
    gameContainer.appendChild(blackBg);

    const gameTitle = document.createElement("h1");
    gameTitle.textContent = playerName+ " kom aldrig hem från Mcdonalds";
    gameTitle.className ="you-died"
    gameContainer.appendChild(gameTitle);

    setTimeout(() => {
        const gameDescription1= document.createElement("h3");
        gameDescription1.textContent = "Välkommen åter!";
        gameDescription1.className ="welcome-back"
        gameContainer.appendChild(gameDescription1);
    
        const buttonStart = document.createElement("button")
        buttonStart.className = "button-start-again"
        buttonStart.textContent = "Spela igen"
        gameContainer.appendChild(buttonStart);
        buttonStart.addEventListener("click", loadStartScene);     
      }, 3000);


}