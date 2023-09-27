document.querySelector("button").addEventListener("click", function () {
  var audio = new Audio("diamonds.m4a");
  audio.currentTime = 0;
  audio.play();
});
