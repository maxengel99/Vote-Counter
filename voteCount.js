var yes = 0;
var no = 0;
getQuestion();

function getQuestion(){
  var question = document.getElementById("userQuestion");
  question.innerHTML = prompt("What is your yes or no question?");
}

function clickYes() {
  yes++;
  refreshResults();
}

function clickNo() {
  no++;
  refreshResults();
}

function refreshResults() {
  var results = document.getElementById('results');
  results.innerHTML = "Total: " + (yes + no);
  results.innerHTML += "<br>Yes: " + yes;
  results.innerHTML += "<br>No: " + no;
}
