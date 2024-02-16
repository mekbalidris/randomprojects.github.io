const rolle=document.getElementById("rolle");
const guess=document.getElementById("guess");
const result=document.getElementById("result");
const email=document.getElementById("email");
const player1=document.getElementById("player1");
const player2=document.getElementById("player2");
const player3=document.getElementById("player3");
const Lplayer1=document.getElementById("Lplayer1");
const Lplayer2=document.getElementById("Lplayer2");
const Lplayer3=document.getElementById("Lplayer3");
const imgdices=document.getElementById("imgdices");

let randomnum;
let emailname;
let Aplayers = [];
let Ascores = [];
let dices = ["dices/1.png","dices/2.png","dices/3.png","dices/4.png","dices/5.png","dices/6.png",];

rolle.onclick = function() {
    randomnum = Math.floor(Math.random() * 6) + 1;
    emailname = email.value;
    theguess = guess.value;

    let i=0;
    if(emailname.includes("@")){
        emailname = emailname.slice(0, emailname.indexOf("@"));
        emailname = emailname.toUpperCase();
            if(email.value=="" || theguess==""){
            window.alert("please fill all the feilds");
            }
            else{
                if(isNaN(theguess)){
                window.alert("please enter a number");
            }
                else{
                randomnum==theguess ? (result.textContent=`${emailname} YOU HAVE WON !!`,i=1): result.textContent=`${emailname} YOU HAVE LOST !!`;
                imgdices.src = dices[randomnum-1];
                if(i==1){
                    Ascores.push(randomnum);
                }
                else{
                    Ascores.push(0);
                }
                Aplayers.push(emailname);
                Lplayer1.textContent=Ascores[0];
                Lplayer2.textContent=Ascores[1];
                Lplayer3.textContent=Ascores[2];
                player1.textContent=Aplayers[0].toLowerCase();
                player2.textContent=Aplayers[1].toLowerCase();
                player3.textContent=Aplayers[2].toLowerCase();
            }
            }
    }
    else{
        window.alert("enter a valid email !!");
    }

}


/*player1.onclick=function(){
    Lplayer1.textContent=`${Ascores[0]}`;
}
player2.onclick=function(){
    Lplayer2.textContent=`${Ascores[1]}`;
}
player3.onclick=function(){
    Lplayer3.textContent=`${Ascores[2]}`;
}

    

    /*if(randomnum==guess.value){
        result.textContent = "YOU HAVE WON !!";
    }
    else{
        result.textContent = "YOU HAVE LOST !!";
    }*/


