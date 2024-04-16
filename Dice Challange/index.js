var randomNumberOne = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumberTwo = Math.floor(Math.random() * 6) + 1; //1-6

var sourceImgOne = "images/dice" + randomNumberOne + ".png";
var sourceImgTwo = "images/dice" + randomNumberTwo + ".png";

var ImgOne = document.querySelectorAll("img")[0];
var ImgTwo = document.querySelectorAll("img")[1];

ImgOne.setAttribute("src", sourceImgOne);
ImgTwo.setAttribute("src", sourceImgTwo);

if (randomNumberOne > randomNumberTwo) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumberTwo > randomNumberOne) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Anyone Does Not Wins!";
}
