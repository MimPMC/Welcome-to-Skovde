
//Extra scener
function loadSceneHome () {
    myAudio.loop = true;
    myAudio.volume = 0.3;
    console.log("Home sweet home")
    scene = 8;
    document.getElementById('game-container').innerHTML = ""
    let dayOrNight = 1

    const startImage = document.createElement("img")
    startImage.src = "./images/home-2.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const skovdeCentrumText = document.createElement('div')
    skovdeCentrumText.className = ("home-text")
    skovdeCentrumText.textContent = "Du kommer hem till ditt stökiga rum. Vad skönt att få koppla av lite hemma!"
    gameContainer.appendChild(skovdeCentrumText);

    const buttonDiv1 = document.createElement('div')
    buttonDiv1.className = "home-div"
    gameContainer.appendChild(buttonDiv1);

    const dayOrNightToggleButton = document.createElement("button");
    dayOrNightToggleButton.textContent = "Gå och lägg dig ⛅️";
    dayOrNightToggleButton.className = "btn btn-home"
    buttonDiv1.appendChild(dayOrNightToggleButton);
    dayOrNightToggleButton.addEventListener('click', toggleNight);

    const goMcdonaldsButton = document.createElement("button");
    goMcdonaldsButton.textContent = "Gå till universitet 📚";
    goMcdonaldsButton.className = "btn btn-home"
    buttonDiv1.appendChild(goMcdonaldsButton);
    goMcdonaldsButton.addEventListener("click", loadSceneFour);


    //Funktion som byter mellan natt och dag 
    function toggleNight() {
        if (dayOrNight) {
            startImage.setAttribute('src', "./images/home-night.png");
            skovdeCentrumText.textContent = "Du sover gott hela natten."
            dayOrNightToggleButton.textContent = "Vakna ⛅️";
            dayOrNight = 0;
        }
        else {
            startImage.setAttribute('src', "./images/home-2.png");
            skovdeCentrumText.textContent = "Du vaknar och solen skiner! Vilken härlig dag."
            dayOrNightToggleButton.textContent = "Gå och lägg dig ⛅️";
            dayOrNight = 1;
        }
    }

}

function loadUniversityApplication() {

    document.getElementById('game-container').innerHTML = ""
    const startImage = document.createElement("img")
    startImage.src = "./images/bg school.png"
    startImage.className = "start-bg-img"
    gameContainer.appendChild(startImage);

    const application = document.createElement("div")
    application.className = "schoolapplication-div"
    gameContainer.appendChild(application);

    const applicationHeadline = document.createElement("h3")
    applicationHeadline.className = "schoolapplication-h3"
    applicationHeadline.textContent = "Ansökan till högskolan i Skövde"
    application.appendChild(applicationHeadline);

    const hisImg = document.createElement("img")
    hisImg.src = "./images/LogoFull.png"
    hisImg.className = "his-img"
    application.appendChild(hisImg);

    const p = document.createElement('p')
    p.className = "app-p"
    p.textContent = "Namn:"+ playerName
    application.appendChild(p);

    const p2 = document.createElement('p')
    p2.className = "app-p app-2"
    p2.textContent = "Program jag vill söka inför höstterminen: "
    application.appendChild(p2);

    addCheckboxes()


    function addCheckboxes() {

        const checkbox1 = document.createElement("input");
        checkbox1.type = "checkbox";
        checkbox1.name = "name";
        checkbox1.value = "value";
        checkbox1.id = "id";
        application.appendChild(checkbox1);

        const label = document.createElement("label");
        label.htmlFor = "id";
        label.appendChild(document.createTextNode("Dataspelsutveckling - design Kandidatprogram"));
        application.appendChild(label);

        const checkbox2 = document.createElement("input");
        checkbox2.type = "checkbox";
        checkbox2.name = "name";
        checkbox2.value = "value";
        checkbox2.id = "id";
        application.appendChild(checkbox2);

        const label2 = document.createElement("label");
        label2.htmlFor = "id";
        label2.appendChild(document.createTextNode("Molekylär bioteknik och kemi magisterprogram"));
        application.appendChild(label2);

        const checkbox3 = document.createElement("input");
        checkbox3.type = "checkbox";
        checkbox3.name = "name";
        checkbox3.value = "value";
        checkbox3.id = "id";
        application.appendChild(checkbox3);

        const label3 = document.createElement("label");
        label3.htmlFor = "id";
        label3.appendChild(document.createTextNode("Ekonomprogrammet - redovisning och revision"));
        application.appendChild(label3);

        const checkbox4 = document.createElement("input");
        checkbox4.type = "checkbox";
        checkbox4.name = "name";
        checkbox4.value = "value";
        checkbox4.id = "id";
        application.appendChild(checkbox4);

        const label4 = document.createElement("label");
        label4.htmlFor = "id";
        label4.appendChild(document.createTextNode("Kognitiv neurovetenskap - neuropsykologi ob  "));
        application.appendChild(label4);

        const checkbox5 = document.createElement("input");
        checkbox5.type = "checkbox";
        checkbox5.name = "name";
        checkbox5.value = "value";
        checkbox5.id = "id";
        application.appendChild(checkbox5);

        const label5 = document.createElement("label");
        label5.htmlFor = "id";
        label5.appendChild(document.createTextNode("Systemutveckling"));
        application.appendChild(label5);
    }


    const applyButton = document.createElement("button")
    applyButton.className = "btn applybtn"
    applyButton.textContent = "Ansök!"
    application.appendChild(applyButton);
    applyButton.addEventListener("click", loadAfterUniversityApplicationScene);

}
// Denna kör efter du "skickat ansökan"
function loadAfterUniversityApplicationScene() {

        document.getElementById('game-container').innerHTML = ""
    
        const startImage = document.createElement("img")
        startImage.src = "./images/bg school.png"
        startImage.className = "start-bg-img"
        gameContainer.appendChild(startImage);
    
        const skovdeCentrumText = document.createElement('div')
        skovdeCentrumText.className = ("centrum-text")
        skovdeCentrumText.textContent = "Tack för din Ansökan "+playerName+ ". Hoppas du blir antagen!"
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


