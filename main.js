window.addEventListener("DOMContentLoaded", main);

function main() {
    loadStartScene();
   

}

function loadStartScene() {

    const p = document.createElement("p");
    p.innerHTML = "Hej! Välkommen till Skövde.";
    document.getElementById("game-container").appendChild('p');
    p.className ="text"

 }