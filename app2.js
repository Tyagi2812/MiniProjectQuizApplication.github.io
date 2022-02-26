const quiz_Data = [
    {
      Question: "Which of the following sorting algorithms provide the best time complexity in the worst-case scenario?",
      a: "Quick Sort",
      b: "Merge Sort",
      c: "Bubble Sort",
      d: "Selection Sort",
      correct: "b",
    },
    {
      Question: "Which data structure is used to implement DFS? ",
      a: "Stack",
      b: "Linked List",
      c: "Binary Tree",
      d: "Quene",
      correct: "a",
    },
    {
      Question: "Which of the following highly uses the concept of an array?",
      a: "Binary Search tree",
      b: "Caching",
      c: "Spatial locality",
      d: "Scheduling of Processes",
      correct: "c",
    },
    {
      Question: " Which of the following principle does Queue use? ",
      a: "LIFO principle",
      b: "FIFO principle",
      c: "Linear tree",
      d: "Ordered Array",
      correct: "b",
    },
    {
      Question: "Which of the following statement is not true about the doubly linked list? ",
      a: "We can traverse in both the directions.",
      b: "It requires extra space",
      c: "Implementation of doubly linked list is easier than the singly linked list",
      d: "It stores the addresses of the next and the previous node",
      correct: "c",
    },
    {
      Question: "Which data structure is used to implement BFS?",
      a: "Linked List",
      b: "Binary Tree",
      c: "Stack",
      d: "Quene",
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
                  <a href="start.html">Go to Starting Page</a>
                  </center>
                  
                  `;
      }
    }
  });
  