
function btnClicked(){
    console.log("My button clicked");
}

function visited(){
    console.log("Mouse over");
}

function mouseout(){
    console.log("Mouse left") ;
}

function update(){
    console.log("Updating Result");
    var input = document.getElementById("myinput");
    console.log(input.value);
    var output = document.getElementById("output");
    output.innerHTML = input.value;


}