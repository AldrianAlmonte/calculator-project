
/* function expression
function greet(name){
    return `Hello ${name} !`;
}
console.log(greet(`Eric`));
*/

//function declaration/anonymous
let greet = function(name){
    return `Hello ${name} !`;
}
console.log(greet(`Eric`));

function displayName(studentName){
    document.write(`
    <h2>Student List</h2>
    <p>Student name: ${studentName}</p>
    <hr>
    `)
}
/*Define a function called multiplyThree which accepts a number and returns that number multiplied by 3*/
let multiplyThree = function(number){
    return number * 3;
}
console.log(multiplyThree)


