// Noora Turpeinen

// Elementlists
let divList = document.querySelectorAll(".exercises>div");
let pList = document.querySelectorAll(".exercises>div>p:nth-child(2)");
let inputList = document.querySelectorAll("input");
let buttonList = document.querySelectorAll(".exercises>div>button");
let imgList = document.querySelectorAll(".content>img");

// Last and next buttons
let lastButton = document.querySelector(".content>button:first-child");
let nextButton = document.querySelector(".content>button:nth-child(2)");

lastButton.addEventListener("click", lastExercise);
nextButton.addEventListener("click", nextExercise);

/*
Returns to the previous exercise and gives focus to its input field.
If currently showing the first exercise only gives focus to the first input field.
*/ 
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

/*
Moves to the next exercise and gives focus to its input field.
If currently showing the last exercise only gives focus to the last input field.
*/ 
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

// Answered questions
let qAnswered = 0;
let answerTracker = document.querySelector("p");

// Shows how many funtions have been answered to
function questionsAnswered() {
    answerTracker.textContent = "Vastatut kysymykset: " + qAnswered + "/5";
}
questionsAnswered();

// Generates a random number, source: https://www.w3schools.com/js/js_random.asp
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gives focus to the first input field
inputList[0].focus();

// Exercise 1.
let addend1 = randomNumber(1, 10);
let addend2 = randomNumber(31, 40);
let addend3 = randomNumber(11, 20);

pList[0].textContent = addend1 + " + " + addend2 + " + " + addend3;

let answer1 = addend1 + addend2 + addend3;

// Exercise 2.
let minuend = randomNumber(41, 50);
let subtrahend1 = randomNumber(1, 10);
let subtrahend2 = randomNumber(11, 20);

pList[1].textContent = minuend + " - " + subtrahend1 + " - " + subtrahend2;

let answer2 = minuend - subtrahend1 - subtrahend2;

// Exercise 3.
let factor1 = randomNumber(2, 9);
let factor2 = randomNumber(2, 9);
let dividend = factor1 * factor2;
let factor3 = randomNumber(2, 9);

pList[2].textContent =  dividend + " : " + factor2 + " · " + factor3;

let answer3 = dividend / factor2 * factor3;

// Exercise 4.
let addend4 = randomNumber(2, 9);
let factor4 = randomNumber(2, 9);
let factor5 = randomNumber(2, 9);

pList[3].textContent = addend4 + " + " + factor4 + " · " + factor5;

let answer4 = addend4 + factor4 * factor5;

// Exercise 5.
let integer1 = randomNumber(31, 50);
let integer2 = randomNumber(11, 30);
let twoDecimalPlaces = randomNumber(10, 90);

pList[4].textContent = integer1 + " - " + integer2 + "," + twoDecimalPlaces;

let answer5 = integer1 - (integer2 + twoDecimalPlaces / 100);
answer5 = Math.round(answer5 * 100) / 100;

// Answerlist
let answerList = [answer1, answer2, answer3, answer4, answer5];

// Check answer buttons
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function() {checkAnswer(i)});
}

/**
 * Checks and shows whether the answer is correct or incorrect, 
 * creates p element and adds text content depending on the answer and 
 * disables the option to edit answer
 * 
 * @param {number} index    indicates the exercise
 */
function checkAnswer(index) {
    if (inputList[index].value !== "") {
        let p = document.createElement("p");
        divList[index].appendChild(p);
        if (inputList[index].value == answerList[index]) {
            inputList[index].classList.add("green");
            p.textContent = "Vastaus on oikein!"
            points++;
        } else {
            inputList[index].classList.add("red");
            p.textContent = "Vastaus on väärin. Oikea vastaus on " + answerList[index] + ".";
        }
        inputList[index].disabled = true;
        buttonList[index].disabled = true;
        qAnswered++;
        questionsAnswered();
        showTotalScoreButton();
    }
}

// Total score
let points = 0;
let totalScore = document.querySelector(".content>p:last-of-type");
let totalScoreButton = document.querySelector(".content>button:nth-last-of-type(2)");

// Shows the total score button
function showTotalScoreButton() {
    if (qAnswered == 5) {
        totalScoreButton.classList.remove("hidden");
    }
}

totalScoreButton.addEventListener("click", showTotalScore);

/*
Shows the text content and image based on total score and try again button
Hides all other elements
*/
function showTotalScore() {
    for (index of divList) {
        index.classList.add("hidden");
    }
    lastButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    answerTracker.classList.add("hidden");
    totalScoreButton.classList.add("hidden");
    let exercises = document.querySelector(".exercises")
    exercises.classList.add("hidden");
    totalScore.classList.remove("hidden");
    tryAgainButton.classList.remove("hidden");
    tryAgainButton.classList.add("block");
    if (points == 4 || points == 5) {
        totalScore.textContent = "Mahtavaa! Sait " + points + "/5 oikein.";
        imgList[0].classList.remove("hidden");
        imgList[0].classList.add("inlineblock");
    } else if (points == 3 || points == 2) {
        totalScore.textContent = "Sait " + points + "/5 oikein.";
        imgList[1].classList.remove("hidden");
        imgList[1].classList.add("inlineblock");
    } else {
        totalScore.textContent = "Sait " + points + "/5 oikein, harjoitus tekee mestarin.";
        imgList[2].classList.remove("hidden");
        imgList[2].classList.add("inlineblock");
    }
}

// Try again button
let tryAgainButton = document.querySelector(".content>button:last-child");

tryAgainButton.addEventListener("click", tryAgain);

// Reloads the page
function tryAgain() {
    window.location.reload();
}

console.log(answerList)