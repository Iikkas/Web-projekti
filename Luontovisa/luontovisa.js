let quiz = {
  
  // array johon oikea vastaus tallentuu 0-3 eli 0 meinaa ensimmäistä vaihtoehtoa ja 3 viimeistä.
  data: [

    {
      q: "<h3> Kysymys (1/5) </h3> <b> Montako järveä suomessa on? </b>",
      o: [
        "168 000",
        "1 000",
        "3",
        "16 800"
      ],
      a: 0
    },
    {
      q: "<h3> Kysymys (2/5) </h3> <b> Mikä on suomen kansallislintu? </b>",
      o: [
        "Harakka",
        "Merikotka",
        "Laulujoutsen",
        "Räkättirastas"
      ],
      a: 2
    },
    {
      q: " <h3> Kysymys (3/5) </h3> <b> Suomen yleisin puulaji? </b>",
      o: [
        "Koivu",
        "Vaahtera",
        "Pihlaja",
        "Mänty"
      ],
      a: 3
    },
    {
      q: " <h3> Kysymys (4/5) </h3> <b> Mitä näistä marjoista poimitaan eniten Suomen luonnosta? </b>",
      o: [
        "Mustikka",
        "Mansikka",
        "Lakka",
        "Puolukka"
      ],
      a: 3
    },
    {
      q: " <h3> Kysymys (5/5) </h3> <b> Mikä näistä maalajeista on eloperäinen? </b> ",
      o: [
        "Turve",
        "Savi",
        "Hiekka",
        "Sora"
      ],
      a: 0
    },
  ],

  hWrap: null,
  hQn: null,
  hAns: null,
  hBack: null,

  now: 0, // tämänhetkinen kysymys
  score: 0, // tämänhetkinen tulos


  init: () => {

    quiz.hWrap = document.getElementById("quizWrap");

    // kysymykset
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // vastaukset
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    quiz.draw();
  },



  // tämä funktio löytyi internetistä tuntemattomalta henkilöltä

  draw: () => {

    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  select: (option) => {
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // oikein tarkistus
    let tyhja = document.getElementById("empty")
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // seuraava kysymys tai lopeta peli

    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `Vastasit ${quiz.score} / ${quiz.data.length} oikein.`;
        quiz.hAns.innerHTML = "<input type='button' value='Yritä uudestaan' onclick='quiz.reset()' id='quizEnd'>";
      }
    }, 1000);
  },
  // aloita alusta nappi
  reset: () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
