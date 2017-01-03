var yes = 0;
var no = 0;

function clickYes() {
  yes++;
  alert("You pressed yes");
  refreshResults();
}

function clickNo() {
  no++;
  alert("You pressed no");
  refreshResults();
}

function refreshResults() {
  var results = document.getElementById('results');
  results.innerHTML = "Total: " + (yes + no);
  results.innerHTML += "<br>Yes: " + yes;
  results.innerHTML += "<br>No: " + no;
}
