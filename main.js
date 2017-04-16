$ ( document ).ready(function(){
  $("#findNumber").click(function() {
    var x = $('#minimumId').val()
    var y = $('#maximumId').val()
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    console.log(randomNumber);
    $("p").text(randomNumber);
 })
});
  
