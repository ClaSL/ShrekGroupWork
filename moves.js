/* HEROES */

let shrekHero = document.querySelector("#shrek");
let donkeyHero = document.querySelector("#donkey");

/* SOUND */

let startMusic = document.querySelector("#startSong");
let horseSound = document.querySelector("#horse");

/* BUTTONS */

let startBtn = document.querySelector("#StartBtn");
let peekBtn = document.querySelector("#peekBtn");
let scene3Button = document.querySelector("#donkeyEntersBtn");
let friendsButton = document.querySelector("#friendsBtn");
let enemiesButton = document.querySelector("#enemiesBtn");



/*START ADVENTURE*/

startMusic.play();
startBtn.addEventListener("click", startScene1);


/*Shrek enters*/

function startScene1() {
    shrekHero.classList.add("shrekMove", "shrekrotate");

    startBtn.classList.add("hidden");
    console.log("StartButton is gone!");

    shrekHero.addEventListener("animationend", removeMoveClass);

    function removeMoveClass () {
        shrekHero.classList.remove("shrekMove");
        shrekHero.style.left = "400px";
        peekBtn.classList.remove("hidden");
        shrekHero.removeEventListener("animationend", removeMoveClass);
    };
}


/*Second Button: Donkey peeks! */

peekBtn.addEventListener("click", startScene2);

function startScene2() {

    setTimeout(function () {
        console.log("Wait for the button..");
        scene3Button.classList.remove("hidden");

    }, 3000);

    console.log("Donkey is peaking!");
    horseSound.play();
    donkeyHero.classList.add("donkeyPeek");
    horseSound.addEventListener("ended", function () {
        console.log("What was that?");
        shrekHero.classList.add("shrekMirror");
        shrekHero.addEventListener("animationend", resetScene2);
    });
}

function resetScene2() {
    //rest stuff
    console.log("reset scene 2");
    donkeyHero.classList.remove("donkeyPeek");
    shrekHero.classList.remove("shrekMirror");
    shrekHero.removeEventListener("animationend", resetScene2);
}

//Meet Donkey


scene3Button.addEventListener("click", startScene3);

function startScene3() {
    console.log("Donkey is coming!");
    peekBtn.classList.add("hidden");
    scene3Button.classList.add("hidden");
    donkeyHero.classList.add("donkeyEnters");
    shrekHero.style.left = "400px";

    donkeyHero.addEventListener("animationend", turnShrek);

    function turnShrek() {
        shrekHero.classList.add("shrekTurns");
    }

    shrekHero.addEventListener("animationend", showButtons);

    function showButtons() {

        setTimeout(function () {
            friendsButton.classList.remove("hidden");
            enemiesButton.classList.remove("hidden");
        }, 200);


    }
}

//We are enemies!
enemiesButton.addEventListener("click", enemies);

function enemies (){
    donkeyHero.classList.remove("donkeyEnters");
    donkeyHero.style.left = "500px";
    console.log("Are you friends?");
    shrekHero.classList.add("shrekKick");
    donkeyHero.classList.add("donkeyRoll");
}
//    donkeyHero.addEventListener("animationend", friendsLeave);
//
//    function friendsLeave (){
//        console.log("Leave!!!");
//        donkeyHero.classList.remove("friendJump");
//        shrekHero.classList.remove("friendJump");
//        donkeyHero.classList.add("friendsLeave");
//        shrekHero.classList.add("friendsLeave");
//    }
//}
//Get Friends
friendsButton.addEventListener("click", getFriends);

function getFriends (){
    donkeyHero.classList.remove("donkeyEnters");
    donkeyHero.style.left = "500px";
    console.log("Are you friends?");
    shrekHero.classList.add("friendJump");
    donkeyHero.classList.add("friendJump");

    donkeyHero.addEventListener("animationend", friendsLeave);

    function friendsLeave (){
        console.log("Leave!!!");
        donkeyHero.classList.remove("friendJump");
        shrekHero.classList.remove("friendJump");
        donkeyHero.classList.add("friendsLeave");
        shrekHero.classList.add("friendsLeave");
    }
}

//getFriends.addEventListener("animationend")










