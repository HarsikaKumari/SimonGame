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
  console.log(animation);

  const sound = new Audio(`./sounds/${randomChosenColour}.mp3`);
  sound.play();
}

$(".btn").on("click", function () {
  const userChosenColour = this.id;
});

userClickedPattern.push(userChosenColour); 

// $("#"+ randomChosenColour).animateHighlight("#dd0000", 1000);
