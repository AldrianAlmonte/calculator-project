let num1 = document.getElementById("number0").value;
let num2 = document.getElementById("number1").value;
    
    
function add(){
    console.log("Calculating...");
    

    result = num1 + num2;

    
    document.getElementById("calculationZone").innerHTML=`<p>${num1} + ${num2} = ${result}`
}

 

 function subtract(){
    console.log("Calculating...");
   

    result = num1 - num2;

    document.getElementById("calculationZone").innerHTML=`<p>${num1} - ${num2} = ${result}`
}

function multiply(){
    console.log("Calculating...");
   

    result = num1 * num2;

    document.getElementById("calculationZone").innerHTML=`<p>${num1} * ${num2} = ${result}`
}

function divide(){
    console.log("Calculating...");
  

    result = num1 / num2;

    document.getElementById("calculationZone").innerHTML=`<p>${num1} / ${num2} = ${result}`
}

