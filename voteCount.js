var yes = 0;
var no = 0;
getQuestion();

function getQuestion(){
  yes = 0;
  no = 0;
  refreshResults();
  var question = document.getElementById("userQuestion","Input a question");
  var result = prompt("What is your yes or no question?");

  while(!result){
    result = prompt("You did not put in a question. What is your yes or no question?");
  }

  question.innerHTML = result;
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
