//specify the random number
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var directory = "images";
// random number and set Attribute;
var random_image1 = directory+"/"+"dice"+randomNumber1+".png";
var random_image2 = directory+"/"+"dice"+ randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src",random_image1);
document.querySelector(".img2").setAttribute("src",random_image2);
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player1 Win";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player2 Win";
}else{
    document.querySelector("h1").innerText = "Draw";
}
