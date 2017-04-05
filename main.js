 var x = prompt("How much would you like to be your maximum for your random number?", "0");
 var num1 = parseInt(x);
$ ( document ).ready(function(){
  $("#findNumber").click(function() {
    var randomNumber = Math.floor(Math.random() * (num1 - 1 + 1)) + 1;
    console.log(randomNumber);
    $("p").text(randomNumber);
 })
});
  
