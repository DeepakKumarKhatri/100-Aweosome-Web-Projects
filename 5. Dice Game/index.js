var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDiceImage = "dice"+randomNumber1+".png";

var randomDiceImageSource = "images/"+randomDiceImage;

document.querySelector(".img1").src = randomDiceImageSource;


var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage2 = "dice"+randomNumber2+".png";

var randomDiceImageSource2 = "images/"+randomDiceImage2;

document.querySelector(".img2").src = randomDiceImageSource2;

if(randomNumber1>randomNumber2){
    document.querySelector(".heading").innerHTML = "Player 1 Won";
}else if (randomNumber2>randomNumber1){
    document.querySelector(".heading").innerHTML = "Player 2 Won"
}else{
    document.querySelector(".heading").innerHTML = "Drawww!!!"
}
