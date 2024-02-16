const num=document.getElementById("num");

function displaycalc(input){
    if(num.value == "undefined" || num.value == "Infinity" || num.value =="Error" || num.value =="NaN"){
        num.value = "";
        num.value += input;
    }
    else{
    num.value += input;
    }
}

function clearnum(){
    num.value = "";
}

function calc(){
    try{
    num.value= eval(num.value);
    }
    catch(error){
        num.value = "Error";
    }
}