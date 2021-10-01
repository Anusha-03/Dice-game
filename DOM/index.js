// for imag1
var randomNumber1 = (Math.floor(Math.random() *6) + 1);

var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;

var left_img = document.querySelectorAll("img")[0]; // selects img1 

left_img.setAttribute("src", randomImageSource);


// for img2
var randomNumber2 = (Math.floor(Math.random() *6) + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // selects img2

//for displaying winner
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "🎌 It's a Draw!";   
}