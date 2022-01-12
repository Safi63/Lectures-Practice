
/*console.log("Strating");
function handleAddNewTodo(){
    console.log("Handling Add New Todo Button"); 
}

function doBindings(){
    console.log("Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}
window.onload = doBindings;
console.log("Finished"); */

/*function handleAddNewTodo(){
    console.log("Handling Add New Todo Button");
}*/

window.onload = function(){
    //do all bindings here
    var btn = document.getElementById("btnAdd");
    btn.onclick = function(){
        console.log("Handling Add New Todo Button");
    }
}