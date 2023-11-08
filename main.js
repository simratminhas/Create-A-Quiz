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

  //OUTPUT Question1
  if (question1 === edna) {
    document.getElementById("question1-out").innerHTML = `<p>Correct</p>`;

    document.getElementById("question1-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("question1-in").style.borderColor = "rgb(52, 253, 102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("question1-out").innerHTML = `<p>Incorrect</p>`;
    
    document.getElementById("question1-out").style.color = "red';
    document.getElementById("question1-in").style.bordercolor = "red";
}
  //OUTPUT Question2
  if (question2 === "usa") {
    document.getElementById("question2-out").innerHTML = `
    <p>Correct</p>
    `;

    document.getElementById("question2-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("question2-in").style.borderColor =
      "rgb(52,253,102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("question2-out").innerHTML = `
    <p>Incorrect</p> 
    `;
    document.getElementById("question2-out").style.color = "red";
    document.getElementById("question2-in").style.borderColor = "red";
  }

  //OUTPUT Question3
  if (question3 === 1996) {
    document.getElementById("question3-out").innerHTML = `
    <p>Correct</p>
    `;

    document.getElementById("question3-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("question3-in").style.borderColor =
      "rgb(52,253,102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("question3-out").innerHTML = `
    <p>Incorrect</p> 
    `;
    document.getElementById("question3-out").style.color = "red";
    document.getElementById("question3-in").style.borderColor = "red";
  }

  //OUTPUT Question4
  if (question4 === 6) {
    document.getElementById("question4-out").innerHTML = `
    <p>Correct</p>
    `;

    document.getElementById("question4-out").style.color = "rgb(52, 253, 102)";
    document.getElementById("question4-in").style.borderColor =
      "rgb(52,253,102)";
    numMark = numMark + 1;
  } else {
    document.getElementById("question4-out").innerHTML = `
    <p>Incorrect</p> 
    `;
    document.getElementById("question4-out").style.color = "red";
    document.getElementById("question4-in").style.borderColor = "red";
  }

  let mark = numMark /4;
  if (mark === 1) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>4/4 (100%) </p>
    <p>Wow! You did amazing!</p>
    `;

  } else if(mark=== 0.75) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>3/4 (75%) </p>
    <p>You're almost there! </p>
    `;

  } else if (mark === 0.5) {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p>2/4 (50%) </p>
    <p> You can do it! </p>
    `;

  } else if (mark === 0.25) {
  outputEl.innerHTML = Math.round(mark * 10) / 10;
  outputEl.innerHTML = `
  <p>1/4 (25%) </p>
  <p> Try harder! </p>
  `;

  } else {
    outputEl.innerHTML = Math.round(mark * 10) / 10;
    outputEl.innerHTML = `
    <p> 0/4 (0%) </p>
    <p> Try reading the "About" page again! </p>
    `;
  }
}
