var numberDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberDrum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      default:
        console.log(buttonInnerHTML);
    }
  });

  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      default:
        console.log(event.key);
    }
  }

  function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
