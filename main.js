

$ ( document ).ready(function(){
  $("#findNumber").click(function() {
    var randomNumber = Math.floor(Math.random() * ("#upTo" - 1 + 1)) + 1;
    console.log(randomNumber);
    $("p").text(randomNumber);
 })
});
  
