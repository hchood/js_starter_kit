var randNum = Math.floor(Math.random()*101);
var secretNum = Math.floor(Math.random()*randNum);
var numGuesses = 0;

$("div.alert-box").text("Guess a number between 0 and " + randNum);

$("#submit").click(function(value){
  var guessString = $("input[type='text']").val();
  var guess = parseInt(guessString, 10);
  numGuesses += 1;
  $(".hidden").show();
  if (guess === secretNum)
    $("#feedback").replaceWith("<p id='feedback'>Congratulations, you've guessed the number in "+numGuesses+" guesses!</p>");
  else if (guess < secretNum)
    $("#feedback").replaceWith("<p id='feedback'>"+guess+" was too low, try again...</p>");
  else if (guess > secretNum)
    $("#feedback").replaceWith("<p id='feedback'>"+guess+" was too high, try again...</p>");

  $("#guesses").append("<li>"+guess+"</li>");
});
