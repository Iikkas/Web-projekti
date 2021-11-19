window.onload = function () {
  randomQuestion();
};
let totalPoints = 0;
let correctAnswer;

// forms thee random math problem
function randomQuestion() {
  let eka = getRandomInt(1, 9);
  let operator = getRandomOperator();
  let toka = getRandomInt(1, 9);
  let qString = eka + operator + toka;
  document.getElementById("question").innerHTML = qString;
  correctAnswer = eval(qString);
}

//random number generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min) + min);
}
//random operator generator
function getRandomOperator() {
  let rnd = getRandomInt(1, 3);
  if (rnd === 1) {
    return "+";
  }
  if (rnd === 2) {
    return "-";
  } else {
    return "*";
  }
}

// checks input
document.getElementById("button").onclick = checkInput;

function checkInput() {
  let input = document.getElementById("input");
  let userAnswer = input.value;
  if (userAnswer === "") {
    return;
  }

  userAnswer = Number(userAnswer);
  if (userAnswer === correctAnswer) {
    totalPoints++;
  } else {
    showAnswer()
  }

  input.value = "";
  randomQuestion();
  document.getElementById("totalPointsSpan").innerText = totalPoints;
}

function showAnswer() {
    let show = document.getElementById("showAnswer");
    show.innerHTML = "Oikea vastaus olisi ollut: " + correctAnswer
    setTimeout(function(){
        show.innerHTML = ""

    },3000)
}

//reset button