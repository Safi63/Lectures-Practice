
document.addEventListener("DOMContentLoaded", function(event) { 
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
  });


function plus() {
     x = parseInt(document.getElementById("num1").value);
     y = parseInt(document.getElementById("num2").value);
    var result = x + y;
    if(isNaN(result) != true)
        document.getElementById("output").value = result;
}


function minus() {
     x = parseInt(document.getElementById("num1").value);
     y = parseInt(document.getElementById("num2").value);
    var result = x - y;
    if(isNaN(result) != true)
    document.getElementById("output").value = result;}


function multiply() {
     x = parseInt(document.getElementById("num1").value);
     y = parseInt(document.getElementById("num2").value);
    var result = x * y;
    if(isNaN(result) != true)
    document.getElementById("output").value = result;}


function division() {
    x = parseInt(document.getElementById("num1").value);
    y = parseInt(document.getElementById("num2").value);
    var result = x / y;
    if(isNaN(result) != true)
    document.getElementById("output").value = result;
}

function neat() {
    document.getElementById("num1").value= '';
    document.getElementById("num2").value= '';
    document.getElementById("output").value = '';
    console.log("clear");
}