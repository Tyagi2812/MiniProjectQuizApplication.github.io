const quiz_Data = [
    {
      Question: "Which of the following statements is correct about the formal parameters in C++?",
      a: "Parameters with which functions are called",
      b: "Parameters which are used in the definition of the function",
      c: "Variables other than passed parameters in a function",
      d: "Variables that are never used in the function",
      correct: "a",
    },
    {
      Question: "The C++ language is ______ object-oriented language ",
      a: "Pure Object oriented",
      b: "Not Object oriented",
      c: "Semi Object-oriented or Partial Object-oriented",
      d: "None of the above",
      correct: "c",
    },
    {
      Question: "<< in C++ is known as:",
      a: "Insertion Operator",
      b: "Extraction Operator",
      c: "Ternary Operator",
      d: "Scope Resolution Operator",
      correct: "a",
    },
    {
      Question: "If we stored five elements or data items in an array, what will be the index address or the index number of the array's last data item?",
      a: "3",
      b: "5",
      c: "4",
      d: "88",
      correct: "c",
    },
    {
      Question: "Which type of memory is used by an Array in C++ programming language?",
      a: "Contiguous",
      b: "None-contiguous",
      c: "Both a and b",
      d: "Not mentioned",
      correct: "a",
    },
    {
      Question: "Which of the following is not a kind of inheritance?",
      a: "Multiple",
      b: "Multi-level",
      c: "Hierarchal",
      d: "Distributed",
      correct: "d",
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
    },300004);
  }
  
  window.onload = function () {
    var fiveMinutes = 60 * 5,
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
  