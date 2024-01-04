const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

function nextSequence() {
  const randomNumber = Math.round(Math.random() * 10) % buttonColours.length;
  // const randomNumber = Math.round(Math.random()*(buttonColours.length-1));

  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  const animation = $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  const sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
  console.log(currentColour);
}

$(".btn").on("click", function () {
  const userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});
