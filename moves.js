/*THE HEROES*/
let shrekHero = document.querySelector("#shrek");

let donkeyHero = document.querySelector("#donkey");

/*THE SOUND*/

let startMusic = document.querySelector("#startMusic");


/*BUTTONS*/

let startBtn = document.querySelector("#firstButton");
let peekBtn = document.querySelector("#peekButton");

/*First Button: Start music and Shrek arrives*/

function playAndArrive() {
    console.log("Play and Arrive");
    startMusic.play();
    startMusic.addEventListener("ended", shrekArrive);

}

function shrekArrive() {
    shrekHero.classList.add("shrekMove");
}

/*Remove First button*/
shrekHero.addEventListener("animationend", removeShrekArrive);

function removeShrekArrive() {
    console.log("First Step over");
    shrekHero.classList.remove("shrekMove");
}

/*Second Button: Donkey PEAKs in*/

let dPeak = document.querySelector("#donkeyPeek");

dPeak.addEventListener("click", peak);

function peak() {
    console.log("Donkey is peaking!")
    donkeyHero.classList.add("donkeyPeek");
}

/*Remove PEAK Button*/

donkeyHero.addEventListener("animationend", removePeak);

function removePeak(){
    console.log("Shut up donkey");
    donkeyHero.classList.remove("donkeyPeek");

}
