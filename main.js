var randomNumber = Math.floor(Math.random() * (2017 - 1 + 1)) + 1;
//if randomNumber > 1000 {
  //radomNumber = randomNumber + "BC"
//}
console.log(randomNumber);
$ ( document ).ready(function(){
  $('#choiceOptionHistory').change(changeOptions);
  $('#randomOptionHistory').change(changeOptions2);
  $("#findYear").click(function() {
    $("p").text(randomNumber);
    var randomNumber = Math.floor(Math.random() * (2017 - 1 + 1)) + 1;
 })
});
  
function changeOptions () {
  
  //When Choice is selected
  if ($('#choiceOptionHistory').prop('checked', true)){
    
    //Deselects Random
    $('#randomOptionHistory').prop('checked', false);
    $('#choiceOptionHistory').prop('checked', true);
   
    
    
  }
}
  function changeOptions2 () {
  
  //When Random is selected
  if ($('#randomOptionHistory').prop('checked', true)){
    
    //Deselects Choice
    $('#choiceOptionHistory').prop('checked', false);
    $('#randomOptionHistory').prop('checked', true);
   
    
    
  }
}
