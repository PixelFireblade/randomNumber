var numberMax = Number("#upTo");

$ ( document ).ready(function(){
  $("#findNumber").click(function() {
    var randomNumber = Math.floor(Math.random() * (numberMax - 1 + 1)) + 1;
    console.log(randomNumber);
    $("p").text(randomNumber);
 })
});
  
