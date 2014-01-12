var randNum = Math.floor(Math.random()*101);
var secretNum = Math.floor(Math.random()*randNum);
var numGuesses = 0

$("div.alert-box").text("Guess a number between 0 and " + randNum);

$("#submit").click(function(value){
  var guess = $("input[type='text']").val();
  numGuesses += 1;
  if (guess === secretNum)
    console.log("Congratulations, you've guessed the number in "+numGuesses+" guesses!");
  else if (guess < secretNum)
    console.log(guess+" was too low, try again...");
  else if (guess > secretNum)
    console.log(guess+" was too high, try again...");

  $(".hidden").show();
  $("#guesses").append("<li>"+guess+"</li>");
});
