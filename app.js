const quiz_Data = [
  {
    Question: " What is the group of 1s in 4 cells of a K-map called?",
    a: "Pair",
    b: "Quad",
    c: "Octect",
    d: "Octave",
    correct: "b",
  },
  {
    Question: "Which number system has a base 16?",
    a: "Hexadecimal",
    b: "Octal",
    c: "Binary",
    d: "Decimal",
    correct: "a",
  },
  {
    Question: "How many bits are needed to store one BCD digit? ",
    a: "2 bits",
    b: "4 bits",
    c: "3 bits",
    d: "1 bits",
    correct: "b",
  },
  {
    Question: "Which of these sets of logic gates are known as universal gates",
    a: "XOR, NAND, OR",
    b: "OR, NOT, XOR",
    c: "NOR, NAND, XNOR",
    d: "NOR, NAND",
    correct: "d",
  },
  {
    Question: "In the toggle mode, a JK flip-flop has? ",
    a: "J = 0, K = 1",
    b: "J = 1, K = 1",
    c: "J = 0, K = 0",
    d: "J = 1, K = 0",
    correct: "b",
  },
  {
    Question: "A digital circuit that can store only one bit is a",
    a: "Register",
    b: "NOR gate",
    c: "Flip-flop",
    d: "XOR gate",
    correct: "c",
  },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let score = 0;
let current_Quiz = 0;
load_Quiz();

function load_Quiz() {
  deSelectAnswers();
  const currentQuizData = quiz_Data[current_Quiz];

  questionEl.innerHTML = currentQuizData.Question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });

}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
  setTimeout(function () {
    window.location.href = "index.html";
  },300005);
}

window.onload = function () {
  var fiveMinutes = 60*5 ,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quiz_Data[current_Quiz].correct) {
      score++;
    }

    current_Quiz++;
// <button onclick="location.reload()" style = "background-color: grey" >Reload</button>

    if (current_Quiz < quiz_Data.length) {
      load_Quiz();
    }
    else {
      quiz.innerHTML = `
                <h2>Total number of questions: ${quiz_Data.length}</h2>
                <h2>Marks Obtained: ${score}</h2>
                <center>
                <a href="start.html"> Go to Starting Page</a>
                </center>
                
                `;
    }
  }
});
