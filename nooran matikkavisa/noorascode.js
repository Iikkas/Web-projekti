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
    /*if (!divList[1].classList.contains("hidden")) {
        divList[1].classList.toggle("hidden");
        divList[0].classList.toggle("hidden");
        inputList[0].focus();
    } else if (!divList[2].classList.contains("hidden")) {
        divList[2].classList.toggle("hidden");
        divList[1].classList.toggle("hidden");
        inputList[1].focus();
    } else if (!divList[3].classList.contains("hidden")) {
        divList[3].classList.toggle("hidden");
        divList[2].classList.toggle("hidden");
        inputList[2].focus();
    } else if (!divList[4].classList.contains("hidden")) {
        divList[4].classList.toggle("hidden");
        divList[3].classList.toggle("hidden");
        inputList[3].focus();
    } else {
        inputList[0].focus();
    }*/
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
    /*if (!divList[0].classList.contains("hidden")) {
        divList[0].classList.toggle("hidden");
        divList[1].classList.toggle("hidden");
        inputList[1].focus();
    } else if (!divList[1].classList.contains("hidden")) {
        divList[1].classList.toggle("hidden");
        divList[2].classList.toggle("hidden");
        inputList[2].focus();
    } else if (!divList[2].classList.contains("hidden")) {
        divList[2].classList.toggle("hidden");
        divList[3].classList.toggle("hidden");
        inputList[3].focus();
    } else if (!divList[3].classList.contains("hidden")) {
        divList[3].classList.toggle("hidden");
        divList[4].classList.toggle("hidden");
        inputList[4].focus();
    } else {
        inputList[4].focus();
    }*/
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
let minuend = randomNumber(20, 40);
let addend1 = randomNumber(50, 70);
let addend2 = randomNumber(80, 100);

pList[0].textContent = minuend + " - " + addend1 + " + " + addend2;

let answer1 = minuend - addend1 + addend2;

/*let pastries = randomNumber(5, 10);

pList[0].textContent = "Osku ja Iines voittivat koulun arpajaisissa " + pastries + " mokkapalaa. Kuinka monta leivonnaista kumpikin saa?"

let answer1 = pastries / 2;*/

// Tehtävä 2.
let factor1 = randomNumber(2, 9);
let factor2 = randomNumber(2, 9);
let dividend = factor1 * factor2;
let factor3 = randomNumber(2, 9);

pList[1].textContent = dividend + " : " + factor2 + " · " + factor3;

let answer2 = dividend / factor2 * factor3;

/*let euros1 = randomNumber(10, 20);
let cents1 = randomNumber(10, 99);
let euros2 = randomNumber(3, 6);
let cents2 = randomNumber(10, 99);

pList[1].textContent = "Osku osti sienestyskirjan, joka maksoi " + euros1 + "," + cents1 + " €, ja kyniä, jotka maksoivat " + euros2 + "," + cents2 + "€. Paljonko rahaa hän käytti yhteensä?";

let answer2 = euros1 + (cents1 / 100) + euros2 + (cents2 / 100);
answer2 = Math.round(answer2 * 100) / 100;*/

// Tehtävä 3.
let factor4 = randomNumber(2, 9);
let addend3 = randomNumber(1, 5);
let addend4 = randomNumber(1, 5);

pList[2].textContent = factor4 + " · (" + addend3 + " + " + addend4 + ")";

let answer3 = factor4 * (addend3 + addend4);

/*let wall = randomNumber(2, 4);

pList[2].textContent = "Neliönmuotoisen leikkimökin yhden seinän pituus on " + wall + " metriä. Mikä on koko leikkimökin ympärysmitta?"

let answer3 = wall * 4;*/

// Tehtävä 4.
let meters = randomNumber(200, 900);
let kilometers = randomNumber(2, 9);

pList[3].textContent = meters + " m + " + kilometers + " km";

let answer4 = meters + kilometers * 1000;

/*let time = randomNumber(10, 35);

pList[3].textContent = "Iineksen koulupäivä alkaa klo 9.45. Hänen koulumatkansa kestää " + time + " minuuttia. Monelta Iineksen pitäisi lähteä kotoa, jotta hän ehtisi koululle 10 minuuttia ennen ensimmäisen tunnin alkua?";

let answer4 = 9.45 - time / 100 - 0.1;
answer4 = Math.round(answer4 * 100) / 100;*/

// Tehtävä 5.
let integer1 = randomNumber(75, 100);
let integer2 = randomNumber(25, 50);
let twoDecimalPlaces = randomNumber(10, 90);

pList[4].textContent = integer1 + " - " + integer2 + "," + twoDecimalPlaces;

let answer5 = integer1 - (integer2 + twoDecimalPlaces / 100);
answer5 = Math.round(answer5 * 100) / 100;

/*let oskuWins = randomNumber(25, 45);
let iinesWins = randomNumber(25, 45);

pList[4].textContent = "Osku on voittanut lautapeli-illoista " + oskuWins + " prosenttia ja Iines " + iinesWins + " prosenttia. Kuinka moni ilta on päättynyt tasapeliin?";

let answer5 = 100 - oskuWins - iinesWins;*/

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