var randNum = Math.floor(Math.random()*101);
$("div.alert-box").text("Guess a number between 0 and " + randNum);

$("#submit").click(function(value){
  var guess = $("input[type='text']").val();
  console.log("Here's the guess: "+guess);
});
