const quiz_Data = [
    {
      Question: "Who invented C language? ",
      a: "Denis Ritche",
      b: "Bjarne Stroustroph",
      c: "Tim Burner",
      d: "R.K Willam",
      correct: "a",
    },
    {
      Question: "Which is the most used programming language ? ",
      a: "java",
      b: "cpp",
      c: "c",
      d: "Javascript",
      correct: "d",
    },
    {
      Question: "Who is the President of India ? ",
      a: "Ram Nath Kovind",
      b: "Narendra Modi",
      c: "Anurag Thakur",
      d: "Nirmala Sitaraman",
      correct: "a",
    },
    {
      Question: "What does CSS stands for ? ",
      a: "Cascading Style Sheet",
      b: "Cascading scroll sheet",
      c: "Cascading soft sheet",
      d: "Cascading Stole Sheet",
      correct: "a",
    },
    {
      Question: "When was Javascript Launched ? ",
      a: "1997",
      b: "1998",
      c: "1995",
      d: "1996",
      correct: "c",
    },
    {
      Question: "Who is the current HRD Minister of India ?",
      a: "Ramesh Pokherial Nishank",
      b: "Nitin Gadkari",
      c: "Rajnath Singh",
      d: "Dharmendra Pradhan",
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
    // window.location.href = "start.html";
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
  