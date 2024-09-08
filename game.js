var buttonColors = ["green", "red", "yellow", "blue"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

$(".btn").on(click(function(){
    $(this).attr("id");
    userClickedPattern.push(userChosenColour);


    playSound(userChosenColour);

}))


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    var selectedColorId = "#" + randomChosenColour

    $(selectedColorId).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    // change 
    $('h1').text

    playSound(randomChosenColour);

}


function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }


function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
   
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
$("body").keypress(function() {
    nextSequence();
});