

$ ( document ).ready(function(){
  $('#choiceOptionHistory').change(changeOptions);
  $('#randomOptionHistory').change(changeOptions2);
  $("#findNumber").click(function() {
    var randomNumber = Math.floor(Math.random() * (1000000000 - 1 + 1)) + 1;
    console.log(randomNumber);
    $("p").text(randomNumber);
 })
});
  
