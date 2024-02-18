var score = document.getElementById("score");
var reset = document.getElementById("reset");


let i=0;

function resetscore(){
    score.value = 0;
    i=0;
}


document.addEventListener("DOMContentLoaded", function(){

var button = document.createElement("button");
button.className = "random-aim";


function generaterandomposition(){

    var randomX = Math.random() * (window.innerWidth - 60);
    var randomY = Math.random() * 100;
    var randomT = Math.random() * 400 + 50;

    return{x:randomX , y:randomY , t:randomT};
}

function buttonposition(){

    var randomposition = generaterandomposition();
    button.style.left = randomposition.x + "px";
    button.style.right = randomposition.y + "px";
    button.style.top = randomposition.t + "px";

}

buttonposition();

document.body.appendChild(button);

button.addEventListener('click', function() {
    buttonposition();
    i=i+1;
    score.value=i;
});
});


