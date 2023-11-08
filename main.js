 //Create A Quiz By Simrat

//Event Listener
document.getElementById("btn").addEventListener("click", checkanswers);

// Check answer code in function
function checkAnswers() {
  //INPUT
  let question1 = document.getElementById("question1-in").value;
  let question2 = document.getElementById("question2-in").value;
  let question3 = document.getElementById("question3-in").value;
  let question4 = document.getElementById("question4-in").value;
  
  let outputEl = document.getElementById("output");

  //Count Variables
  let numMark = 0;
