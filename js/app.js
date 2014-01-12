var randNum = Math.floor(Math.random()*101);
var secretNum = Math.floor(Math.random()*randNum);
var numGuesses = 0;

function showSuccessButton() {
  $("a.success").show();
}

function isValid(guess) {
  if (guess < 0 || guess > randNum || isNaN(guess)){
    return false;
  }
  else
    return true;
}

function displayFeedback(guess) {
  if (guess === secretNum){
    $("#feedback").replaceWith("<p id='feedback'>Congratulations, you've guessed the number in "+numGuesses+" guesses!</p>");
    showSuccessButton();
  } else if (guess < secretNum)
    $("#feedback").replaceWith("<p id='feedback'>"+guess+" was too low, try again...</p>");
  else if (guess > secretNum)
    $("#feedback").replaceWith("<p id='feedback'>"+guess+" was too high, try again...</p>");
    $("#guesses").append("<li>"+guess+"</li>");
}

$("div.alert-box").text("Guess a number between 0 and " + randNum);

$("a.submit").click(function(value){

  var guessString = $("input[type='text']").val();
  var guess = parseInt(guessString, 10);

  if (isValid(guess)){
    numGuesses += 1;
    $("p.hidden").show();
    displayFeedback(guess);
   } else
      $("#feedback").replaceWith("<p id='feedback'>Invalid input, must enter a number between 0 and "+randNum+".</p>");
});

$("a.success").click(function(){
  window.location.reload();
});
