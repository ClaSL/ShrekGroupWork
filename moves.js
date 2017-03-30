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

let apples = document.querySelectorAll(".apple");
let apple1 = document.querySelector("#apple1");
let apple2 = document.querySelector("#apple2");
let apple3 = document.querySelector("#apple3");

/*START ADVENTURE*/

startMusic.play();
startBtn.addEventListener("click", startScene1);


/*Shrek enters*/

function startScene1() {
    shrekHero.classList.add("shrekMove", "shrekrotate");

    startBtn.classList.add("hidden");
    console.log("StartButton is gone!");

    shrekHero.addEventListener("animationend", removeMoveClass);

    function removeMoveClass() {
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

        function resetScene2() {
            console.log("reset scene 2");
            donkeyHero.classList.remove("donkeyPeek");
            shrekHero.classList.remove("shrekMirror");
            shrekHero.removeEventListener("animationend", resetScene2);
        }
    });
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
        donkeyHero.removeEventListener("animationend", turnShrek);
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

function enemies() {
    shrekHero.classList.remove("shrekrotate");
    shrekHero.classList.remove("shrekTurns");
    donkeyHero.classList.remove("donkeyEnters");
    donkeyHero.style.left = "500px";
    console.log("Get out Donkey!");

    shrekHero.classList.add("shrekKick");
    donkeyHero.classList.add("donkeyRoll");
    shrekHero.addEventListener("animationend", goaway);
    function goaway(){
        shrekHero.classList.add("shrekgoaway");
        shrekHero.removeEventListener("animationend", goaway);
        enemiesButton.style.display="none"
    };



}


//Get Friends
friendsButton.addEventListener("click", getFriends);




function getFriends() {
    shrekHero.classList.remove("shrekKick");
    shrekHero.classList.remove("shrekgoaway");
    shrekHero.classList.remove("friendJump");
    donkeyHero.classList.remove('donkeyRoll');
    donkeyHero.classList.remove('friendJump');

    apple1.classList.remove("hidden");
    apple2.classList.remove("hidden");
    apple3.classList.remove("hidden");
    apple1.classList.add("applescale");
    apple2.classList.add("applescale");
    apple3.classList.add("applescale");

    apples.forEach(appleEListener);
    function appleEListener (item){
        item.addEventListener("click", appleClicked);
    };

    let clickNumber = 0;
    function appleClicked (){
        this.classList.add("appleDisappear");
        clickNumber++;
        if (clickNumber==3){
            donkeyHero.classList.remove("donkeyEnters");
            donkeyHero.style.left = "500px";
            console.log("Are you friends?");
            shrekHero.classList.add("friendJump");
            donkeyHero.classList.add("friendJump");

            donkeyHero.addEventListener("animationend", friendsLeave);

            function friendsLeave() {
                console.log("Leave!!!");
                donkeyHero.classList.remove("friendJump");
                shrekHero.classList.remove("friendJump");
                donkeyHero.classList.add("friendsLeave");
                shrekHero.classList.add("friendsLeave");
                donkeyHero.removeEventListener("animationend", friendsLeave);
            }
        } else{
            apple1.classList.add("appleshake");
            apple2.classList.add("appleshake");
            apple3.classList.add("appleshake");
        }

    };


    friendsButton.style.display="none";


}

//getFriends.addEventListener("animationend")
