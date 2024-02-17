const generate=document.getElementById("generate");
const number=document.getElementById("number");
const special=document.getElementById("special");
const capital=document.getElementById("capital");
const pass=document.getElementById("pass");
const checknum=document.getElementById("checknum");
const checkspecial=document.getElementById("checkspecial");
const checkcapital=document.getElementById("checkcapital");
const txt=document.getElementById("txt");


generate.onclick=function(){
    let pwlength = 0;
    const numbervalue = Number(number.value);
    const specialvalue = Number(special.value);
    const capitalvalue = Number(capital.value);
    
    if(checknum.checked && checkspecial.checked && checkcapital.checked){
        pwlength = numbervalue + specialvalue + capitalvalue;
        txt.textContent = pwlength;
    }
    if(checkspecial.checked){

    }
    if(checkcapital.checked){

    }

}

