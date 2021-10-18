
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates random number between 1 and 6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png may get selected because of randomNumber1

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randoDiceImage2 = "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randoDiceImage2);

if(randomNumber1 > randomNumber2){
    var gameResult = " Player1 won 👌";
     var heading1 = document.querySelector("h1");
     heading1.innerHTML = gameResult;
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 won 👌" ;
} else {
    document.querySelector("h1").innerHTML = "Its Draw 🤷‍♀️ Try again" ;
}
