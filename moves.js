/*THE HEROES*/
let shrekHero = document.querySelector("#shrek");

let donkeyHero = document.querySelector("#donkey");

/*THE SOUND*/

let startMusic = document.querySelector("#startMusic");



/*BUTTONS*/

let startBtn = document.querySelector("#firstButton");
let peekBtn = document.querySelector("#peekButton");

/*First Button: Start music and Shrek arrives*/

/*function playAndArrive() {
    console.log("Play and Arrive");
    startMusic.play();
    startMusic.addEventListener("ended", shrekArrive);

}
*/
startBtn.addEventListener("click", shrekArrive);

function shrekArrive() {
    shrekHero.classList.add("shrekMove");
    console.log("It works!");
}


/*Remove First button*/
/*
shrekHero.addEventListener("animationend", removeShrekArrive);

function removeShrekArrive() {
    console.log("First Step over");
    shrekHero.classList.remove("shrekMove");
}
*/

/*Second Button: Donkey PEAKs in*/

peekBtn.addEventListener("click", peak);

function peak() {
    console.log("Donkey is peaking!");
    let horseSound = document.querySelector("#horse");
     horseSound.play();
    donkeyHero.classList.add("donkeyPeek");
    horseSound.addEventListener("ended",shrekMirror);

    function shrekMirror (){
        console.log("What was that?");
        shrekHero.classList.add("shrekMirror")
    }


}

/*Remove PEAK Button*/
/*
donkeyHero.addEventListener("animationend", removePeak);

function removePeak(){
    console.log("Shut up donkey");
    donkeyHero.classList.remove("donkeyPeek");
}
*/
