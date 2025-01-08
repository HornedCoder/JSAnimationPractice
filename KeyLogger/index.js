const startB = document.getElementById("startBtn");
const stopB = document.getElementById("stopBtn");
const btnDown = document.getElementById("btnDown");
const btnUp = document.getElementById("btnUp");

startB.addEventListener("click", () => {
    document.addEventListener("keydown", handelDown);
    document.addEventListener("keyup", handelUp);
    startB.disabled = true;
    stopB.disabled = false;
});

stopB.addEventListener("click", () => {
    document.removeEventListener("keydown", handelDown);
    document.removeEventListener("keyup", handelUp);
    btnDown.textContent = "";
    btnUp.textContent = "";
    startB.disabled = false;
    stopB.disabled = true;
});

function handelDown(event){

    btnDown.textContent = `Key ${event.key} is pressed down`;
    btnUp.textContent = "Key is down";
}

function handelUp(event){
    btnDown.textContent = `Key ${event.key} is pressed up`;
    btnUp.textContent = "Key is up";
}

