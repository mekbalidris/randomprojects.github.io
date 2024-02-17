const generate=document.getElementById("generate");
const number=document.getElementById("number");
const special=document.getElementById("special");
const capital=document.getElementById("capital");
const pass=document.getElementById("pass");
const checknum=document.getElementById("checknum");
const checkspecial=document.getElementById("checkspecial");
const checkcapital=document.getElementById("checkcapital");
const txt=document.getElementById("txt");
const ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZ",ALPHAsize=ALPHA.length;
const alpha="abcdefghijklmnopqrstuvwxyz",alphasize=alpha.length;
const num="0123456789",numsize=num.length;
const specialchar="!@#$%^&*()_+}{;'/.,<>?|",specialcharsize=specialchar.length;

generate.onclick=function(){
    let i=0;
    pass.value = "";
    let pwlength = 0;
    const numbervalue = Number(number.value);
    const specialvalue = Number(special.value);
    const capitalvalue = Number(capital.value);
    let allowedchars = "";
    if(checknum.checked){
        i++;
    }
    if(checkcapital.checked){
        i++;
    }
    if(checkspecial.checked){
        i++;
    }
   
    if(i>=2){
if(checknum.checked && checkspecial.checked && checkcapital.checked){

        allowedchars = alpha + num + specialchar + ALPHA;
        pwlength = numbervalue + specialvalue + capitalvalue;
        for(let i=0; i<pwlength ; i++){
            const randomIndex = Math.floor(Math.random() * (ALPHAsize + alphasize + numsize + specialcharsize));
            pass.value += allowedchars[randomIndex];
        }
    }
else if(checknum.checked && checkspecial.checked){

        allowedchars = alpha + num + specialchar;
        pwlength = numbervalue + specialvalue;
        for(let i=0; i<pwlength ; i++){
            const randomIndex = Math.floor(Math.random() * (alphasize + numsize + specialcharsize));
            pass.value += allowedchars[randomIndex];
        }
    }
else if(checknum.checked && checkcapital.checked){

        allowedchars = alpha + num + ALPHA;
        pwlength = numbervalue + capitalvalue;
        for(let i=0; i<pwlength ; i++){
            const randomIndex = Math.floor(Math.random() * (alphasize + numsize + ALPHAsize));
            pass.value += allowedchars[randomIndex];
        }
    }
else if(checkspecial.checked && checkcapital.checked){

        allowedchars = alpha + specialchar + ALPHA;
        pwlength = specialvalue + capitalvalue;
        for(let i=0; i<pwlength ; i++){
            const randomIndex = Math.floor(Math.random() * (alphasize + specialcharsize + ALPHAsize));
            pass.value += allowedchars[randomIndex];
        }
    }
    }

else{
    window.alert("please select at least two checkboxes");
}

}

