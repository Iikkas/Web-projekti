// Noora Turpeinen

// Elementtilistat
let divList = document.querySelectorAll(".exercises>div");
let pList = document.querySelectorAll(".exercises>div>p:nth-child(2)");
let inputList = document.querySelectorAll("input");
let buttonList = document.querySelectorAll(".exercises>div>button");

// Satunnaislukugeneraattori
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tarkistuspainikkeet
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function() {checkAnswer(i)});
}

// Last- ja next-painikkeet
let lastButton = document.querySelector(".content>button:first-child");
let nextButton = document.querySelector(".content>button:nth-child(2)");

lastButton.addEventListener("click", lastExercise);
nextButton.addEventListener("click", nextExercise);

function lastExercise() {
    if (!divList[0].classList.contains("hidden")) {
        inputList[0].focus();
    } else {
        for (let i = 1; i < divList.length; i++) {
            if (!divList[i].classList.contains("hidden")) {
                divList[i].classList.toggle("hidden");
                divList[i-1].classList.toggle("hidden");
                inputList[i-1].focus();
            }
        }
    }
}

function nextExercise() {
    if (!divList[4].classList.contains("hidden")) {
        inputList[4].focus();
    } else {
        for (let i = 3; i < divList.length - 1; i--) {
            if (!divList[i].classList.contains("hidden")) {
                divList[i].classList.toggle("hidden");
                divList[i+1].classList.toggle("hidden");
                inputList[i+1].focus();
            }
        }
    }
}

// Vastatut kysymykset
let qAnswered = 0;
let answerTracker = document.querySelector("p");

function questionsAnswered() {
    answerTracker.textContent = "Vastatut kysymykset: " + qAnswered + "/5";
}
questionsAnswered();

// Ensimmäisen tehtävän syöttökenttään kohdistaminen
inputList[0].focus();

// Tehtävä 1.
let minuend = randomNumber(10, 30);
let addend1 = randomNumber(40, 60);
let addend2 = randomNumber(70, 90);

pList[0].textContent = minuend + " - " + addend1 + " + " + addend2;

let answer1 = minuend - addend1 + addend2;

// Tehtävä 2.
let factor1 = randomNumber(2, 9);
let factor2 = randomNumber(2, 9);
let dividend = factor1 * factor2;
let factor3 = randomNumber(2, 9);

pList[1].textContent = dividend + " : " + factor2 + " · " + factor3;

let answer2 = dividend / factor2 * factor3;

// Tehtävä 3.
let factor4 = randomNumber(2, 9);
let addend3 = randomNumber(1, 5);
let addend4 = randomNumber(1, 5);

pList[2].textContent = factor4 + " · (" + addend3 + " + " + addend4 + ")";

let answer3 = factor4 * (addend3 + addend4);

// Tehtävä 4.
let meters = randomNumber(200, 900);
let kilometers = randomNumber(2, 9);

pList[3].textContent = meters + " m + " + kilometers + " km";

let answer4 = meters + kilometers * 1000;

// Tehtävä 5.
let integer1 = randomNumber(75, 100);
let integer2 = randomNumber(25, 50);
let twoDecimalPlaces = randomNumber(10, 90);

pList[4].textContent = integer1 + " - " + integer2 + "," + twoDecimalPlaces;

let answer5 = integer1 - (integer2 + twoDecimalPlaces / 100);
answer5 = Math.round(answer5 * 100) / 100;

// Vastauslista
let answerList = [answer1, answer2, answer3, answer4, answer5];

// Vastausten tarkitus
function checkAnswer(index) {
    if (inputList[index].value !== "") {
        let p = document.createElement("p");
        divList[index].appendChild(p);
        if (inputList[index].value == answerList[index]) {
            p.textContent = "Vastaus on oikein!"
            points++;
        } else {
            p.textContent = "Vastaus on väärin. Oikea vastaus on " + answerList[index] + ".";
        }
        inputList[index].disabled = true;
        buttonList[index].disabled = true;
        qAnswered++;
        questionsAnswered();
        showTotalScoreButton();
    }
}

// Lopputulos
let points = 0;
let totalScore = document.querySelector(".content>p:last-of-type");
let totalScoreButton = document.querySelector(".exercises>button:last-child");

function showTotalScoreButton() {
    if (qAnswered == 5) {
        totalScoreButton.classList.remove("hidden");
    }
}

totalScoreButton.addEventListener("click", showTotalScore);

function showTotalScore() {
    for (index of divList) {
        index.classList.add("hidden");
    }
    answerTracker.classList.add("hidden");
    lastButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    totalScoreButton.classList.add("hidden");
    totalScore.classList.remove("hidden");
    totalScore.textContent = points + "/5";
    tryAgainButton.classList.remove("hidden");
}

// Yritä uudelleen -painike
let tryAgainButton = document.querySelector(".content>button:last-child");

tryAgainButton.addEventListener("click", tryAgain);

function tryAgain() {
    window.location.reload();
}