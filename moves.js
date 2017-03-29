/*THE HEROES*/
let shrekHero = document.querySelector("#shrek");

let donkeyHero = document.querySelector("#donkey");

/*THE SOUND*/

let startMusic = document.querySelector("#startSong");

let horseSound = document.querySelector("#horse");

/*BUTTONS*/

let startBtn = document.querySelector("#firstButton");
let peekBtn = document.querySelector("#peekButton");
let scene3Button = document.querySelector("#scene3Button");

startMusic.play ();
startBtn.addEventListener("click", startScene1);

function startScene1 (){
    shrekHero.classList.add("shrekMove");

    startBtn.classList.add("hidden");

    peekBtn.classList.remove("hidden");
    console.log("It works!");
    shrekHero.addEventListener("animationend", function(){
        shrekHero.classList.remove("shrekMove");
        shrekHero.style.left="400px";
    });

}


function resetScene2() {
    //rest stuff
    console.log("reset scene 2");

    donkeyHero.classList.remove("donkeyPeek");

    shrekHero.classList.remove("shrekMirror");


}
/*Second Button: Donkey PEAKs in*/

peekBtn.addEventListener("click", startScene2);

function startScene2() {
    console.log("Donkey is peaking!");
    horseSound.play();
    donkeyHero.classList.add("donkeyPeek");
    scene3Button.classList.remove("hidden");

    horseSound.addEventListener("ended", function () {
        console.log("What was that?");
        shrekHero.classList.add("shrekMirror");

    });
}

shrekHero.addEventListener("animationend", resetScene2);

function resetScene2() {
    //rest stuff
    console.log("reset scene 2");

    donkeyHero.classList.remove("donkeyPeek");

    shrekHero.classList.remove("shrekMirror");
}

scene3Button.addEventListener("click", startScene3);
function startScene3 (){
    console.log("Donkey is coming!");
    peekBtn.classList.add("hidden");
    scene3Button.classList.add("hidden");
    donkeyHero.classList.add("donkeySings");
        shrekHero.style.left="400px";
        shrekHero.classList.add("shrekTurns");
}

