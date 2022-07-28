//defining variables for score of result options
var smithScore = 0;
var barnardScore = 0;
var radcliffeScore = 0;
var mountHolyokeScore = 0;

//defining variable for counting questions
var questionCount = 0;

//defining variables for answer options
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//defining variable for result button
var getResult = document.getElementById("getResult");

//defining variable for restart button
var redo = document.getElementById("redo");

//event listeners for score
q1a1.addEventListener('click', barnard);
q1a2.addEventListener('click', smith);
q1a3.addEventListener('click', radcliffe);
q1a4.addEventListener('click', moho);
q2a1.addEventListener('click', smith);
q2a2.addEventListener('click', barnard);
q2a3.addEventListener('click', moho);
q2a4.addEventListener('click', radcliffe);
q3a1.addEventListener('click', smith);
q3a2.addEventListener('click', barnard);
q3a3.addEventListener('click', radcliffe);
q3a4.addEventListener('click', moho);
q4a1.addEventListener('click', smith);
q4a2.addEventListener('click', barnard);
q4a3.addEventListener('click', moho);
q4a4.addEventListener('click', radcliffe);
q5a1.addEventListener('click', moho);
q5a2.addEventListener('click', smith);
q5a3.addEventListener('click', radcliffe);
q5a4.addEventListener('click', barnard);

//event listeners for disable buttons
q1a1.addEventListener('click', disable1);
q1a2.addEventListener('click', disable1);
q1a3.addEventListener('click', disable1);
q1a4.addEventListener('click', disable1);
q2a1.addEventListener('click', disable2);
q2a2.addEventListener('click', disable2);
q2a3.addEventListener('click', disable2);
q2a4.addEventListener('click', disable2);
q3a1.addEventListener('click', disable3);
q3a2.addEventListener('click', disable3);
q3a3.addEventListener('click', disable3);
q3a4.addEventListener('click', disable3);
q4a1.addEventListener('click', disable4);
q4a2.addEventListener('click', disable4);
q4a3.addEventListener('click', disable4);
q4a4.addEventListener('click', disable4);
q5a1.addEventListener('click', disable5);
q5a2.addEventListener('click', disable5);
q5a3.addEventListener('click', disable5);
q5a4.addEventListener('click', disable5);

//change color of button when clicked
q1a1.addEventListener('click', function onClick() {
  q1a1.style.backgroundColor = '#ff2272';
});
q1a2.addEventListener('click', function onClick() {
  q1a2.style.backgroundColor = '#ff2272';
});
q1a3.addEventListener('click', function onClick() {
  q1a3.style.backgroundColor = '#ff2272';
});
q1a4.addEventListener('click', function onClick() {
  q1a4.style.backgroundColor = '#ff2272';
});
q2a1.addEventListener('click', function onClick() {
  q2a1.style.backgroundColor = '#ff2272';
});
q2a2.addEventListener('click', function onClick() {
  q2a2.style.backgroundColor = '#ff2272';
});
q2a3.addEventListener('click', function onClick() {
  q2a3.style.backgroundColor = '#ff2272';
});
q2a4.addEventListener('click', function onClick() {
  q2a4.style.backgroundColor = '#ff2272';
});
q3a1.addEventListener('click', function onClick() {
  q3a1.style.backgroundColor = '#ff2272';
});
q3a2.addEventListener('click', function onClick() {
  q3a2.style.backgroundColor = '#ff2272';
});
q3a3.addEventListener('click', function onClick() {
  q3a3.style.backgroundColor = '#ff2272';
});
q3a4.addEventListener('click', function onClick() {
  q3a4.style.backgroundColor = '#ff2272';
});
q4a1.addEventListener('click', function onClick() {
  q4a1.style.backgroundColor = '#ff2272';
});
q4a2.addEventListener('click', function onClick() {
  q4a2.style.backgroundColor = '#ff2272';
});
q4a3.addEventListener('click', function onClick() {
  q4a3.style.backgroundColor = '#ff2272';
});
q4a4.addEventListener('click', function onClick() {
  q4a4.style.backgroundColor = '#ff2272';
});
q5a1.addEventListener('click', function onClick() {
  q5a1.style.backgroundColor = '#ff2272';
});
q5a2.addEventListener('click', function onClick() {
  q5a2.style.backgroundColor = '#ff2272';
});
q5a3.addEventListener('click', function onClick() {
  q5a3.style.backgroundColor = '#ff2272';
});
q5a4.addEventListener('click', function onClick() {
  q5a4.style.backgroundColor = '#ff2272';
});

//restart click
redo.addEventListener('click', restartQuiz);

//barnard function
function barnard(){
  barnardScore += 1;
  questionCount += 1;
  console.log("Barnard: " + barnardScore);
  console.log("Question Count: " + questionCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

//smith function
function smith(){
  smithScore +=1;
  questionCount +=1;
  console.log("Smith: " + smithScore);
  console.log("Question Count: " + questionCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

//radcliffe function
function radcliffe(){
  radcliffeScore +=1;
  questionCount +=1;
  console.log("Radcliffe: " + radcliffeScore);
  console.log("Question Count: " + questionCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

//moho function
function moho(){
  mountHolyokeScore +=1;
  questionCount +=1;
  console.log("Moho: " + mountHolyokeScore);
  console.log("Question Count: " + questionCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

//determine result
function updateResult(){
  getResult.addEventListener('click', displayResult);
}

function displayResult(){
  if (barnardScore > smithScore && barnardScore > radcliffeScore && barnardScore > mountHolyokeScore){
    console.log("Barnard!");
    document.getElementById("result").innerHTML = "You should go to Barnard!";
  }
  else if (smithScore > barnardScore && smithScore > radcliffeScore && smithScore > mountHolyokeScore){
    console.log("Smith!");
    document.getElementById("result").innerHTML = "You should go to Smith!";
  }
  else if (radcliffeScore > smithScore && radcliffeScore > barnardScore && radcliffeScore > mountHolyokeScore){
    console.log("Radcliffe!");
    document.getElementById("result").innerHTML = "You should go to Radcliffe!";
  }
  else if (mountHolyokeScore > smithScore && mountHolyokeScore > radcliffeScore && mountHolyokeScore > barnardScore){
    console.log("Mount Holyoke!");
    document.getElementById("result").innerHTML = "You should go to Mount Holyoke!";
  }
}

//disable q 1
function disable1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

//disable q2
function disable2(){
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

//disable q3
function disable3(){
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

//disable q4
function disable4(){
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

//disable q5
function disable5(){
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

function restartQuiz(){
  document.getElementById("result").innerHTML = "";
  
  smithScore = 0;
  barnardScore = 0;
  radcliffeScore = 0;
  mountHolyokeScore = 0;
  questionCount = 0;

  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
}