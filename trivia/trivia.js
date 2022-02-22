var firstPart = "Incorrect";

var endPart = "Correct";

var score = 0;

function getScore() {

  score++
};



function verifyDay(form) {
  var myEntry = form.day.value.toUpperCase();

  switch (myEntry) {
    case "2/14":
      alert(endPart);
      score++;
      break;
    case "2/15":
      alert(firstPart);
      break;
    case "3/21":
      alert(firstPart);
      break;
    case "9/18":
      alert(firstPart);
      break;
    default:
      alert('You have entered an invalid answer');
  }
}


function verifyHTML(form) {
  var myEntry = form.test.value.toLowerCase();

  switch (myEntry) {
    case "mark up":
      alert(endPart);
      score++;
      break;
    case "spreadsheet":
      alert(firstPart);
      break;
    case "programming":
      alert(firstPart);
      break;
    case "scripting":
      alert(firstPart);
      break;
    default:
      alert('You have entered an invalid answer');
  }


}


function verifyNASA(form) {
  var myEntry = form.space.value.toLowerCase();

  if (myEntry == 4 || myEntry == "four") {
    alert(endPart);
    score++;
  }

  else {
    alert(firstPart);
  }
}

function verifyPlants(form) {
  var myEntry = form.plants.value.toLowerCase();

  if (myEntry == "Oxygen" || myEntry == "oxygen") {
    alert(endPart);
    score++;
  }

  else {
    alert(firstPart);
  }
}


function returnScore() {
  alert("you got " + score + "/4");

}