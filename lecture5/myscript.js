console.log("My First JS from an external file");
// JS is a loosley typed language
var x = 5;
var y = 10;

console.log("Result is ",x*y);

//this is how we write our functions is js
function sum(a,b){
    return a + b;
} 
console.log(sum);
//you can assign functions to variables;
var mysum = sum;
console.log(mysum);