function sum(num1,num2){
    console.log(num1+num2);
}

/*
let sum2 = function(){
    console.log(3+3)
}
sum();

sum(10,10);
sum(3,3);
sum(6,2);
*/

let subTotal = 0;

function addCart (price){
    return subTotal += price;
    //      0    +  200
    //     200   +  400
    //     600   +  600
}
function taxesCalculation(subTotal){
    return 1.11 * subTotal
}
subTotal = addCart(200);
subTotal = addCart(400);
subTotal = addCart(600);

console.log(`The total value is ${subTotal}`);

const total = taxesCalculation(subTotal);
console.log(`The total is: ${total}`);