$(function() {
    //jq will execute this function after page load
    //so do your bindings here
    $("#addButton").click(handlebtnClick);
    // $("#todos li").click(removeMe);
    $("#todos").on("click","li",removeMe);
    
});
function handlebtnClick() {
    var newTodo = $("#newTodo").val();
    if(!newTodo){
        $("#newTodo").addClass("error");
        return;
    }
    $("#newTodo").removeClass("error");
    $("#newTodo").val("");
    $("#todos").append("<li>"+newTodo+"</li>");
    // $("#todos li").click(removeMe); 
    
}

function removeMe() {
    $(this).fadeOut();
    // remove();
    
}