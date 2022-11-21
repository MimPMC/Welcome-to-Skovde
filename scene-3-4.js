

function loadSceneThree() {
    myAudio.setAttribute('src', "./happy.mp3");
    myAudio.play();
    myAudio.loop = true;
    myAudio.volume = 0.3;
    console.log("scene3")
    scene = 3
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
    goHome.addEventListener("click", loadSceneHome);

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
            alert ("Du går till MCdonalds!");
            Mcdonalds = true;
            myAudio.setAttribute('src', "./mcdonalds.wav");
            myAudio.volume = 0.5;
            console.log("test-1")
            dayOrNight = 1;
            loadSceneFive();
        }
        else {
            console.log("test-2")
            alert("Mcdonalds är stängt! Kom tillbaka imorgon.")
            dayOrNight = 0;
        }
        
    }
    

}

function loadSceneFour() {
    myAudio.setAttribute('src', "./happy.mp3");
    myAudio.play();
    myAudio.loop = true;
    myAudio.volume = 0.3;
    console.log("scene4")
    scene = 4
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
    dayOrNightToggleButton.addEventListener('click', loadUniversityApplication)


    const backButton = document.createElement("button");
    backButton.textContent = "Gå till centrum";
    backButton.className = "btn scene-three-button"
    buttonDiv1.appendChild(backButton);
    backButton.addEventListener('click', loadSceneThree)
}