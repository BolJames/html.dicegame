var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var diceImages = document.querySelectorAll("img");
diceImages[0].setAttribute("src", randomImageSource1);
diceImages[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}