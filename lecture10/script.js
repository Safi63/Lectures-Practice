// console.log("Code Start");

// $(function () {
//     console.log("Doing Bindings");
//   $("#load").click(sendAjax);  
// });
// function sendAjax() {
//     console.log("sending ajax Request");
//     //send request here
//     $.get("result.txt", handleResponse);
//     console.log("Request sent");
// }
// function handleResponse(response) {
//      console.log("response received");
//      console.log(response);
//      $("#result").empty();
//      $("#result").append(response);
// }
// console.log("Code Finished");



$(function () {
  $("#load").click(function (){
    $.get("result.txt", function (response){
        $("#result").empty();
        $("#result").append(response);
    });
  });
});