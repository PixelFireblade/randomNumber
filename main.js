$ ( document ).ready(function(){
  $("#findNumber").click(function() {
    var nums = [];
    var x = $('#minimumId').val()
    var y = $('#maximumId').val()
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    
    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    
    if ($('#random').prop('checked', true)){
    
    //Deselects Opposite Verb, Adjective and Noun
    $('#choiceVerb').prop('checked', false);
    $('#choiceAdjective').prop('checked', false);
    $('#choiceNoun').prop('checked', false);
    
    //Deselects Choice
    $('#random').prop('checked', true);
    $('#choiceOption').prop('checked', false);
    
    //Undisables Verb, Adjective and Noun
    $('#choiceVerb').prop('disabled', true);
    $('#choiceAdjective').prop('disabled', true);
    $('#choiceNoun').prop('disabled', true);
    
    //Disables Opposite Verb, Adjective and Noun
    $('#randomVerb').prop('disabled', false);
    $('#randomAdjective').prop('disabled', false);
    $('#randomNoun').prop('disabled', false);
    
    
  }
   // while jQuery.inArray(randomNumber, nums){
   //    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    //}
    //else {
  //     nums.push(randomNumber);
   // }
   
    
    
    
    console.log(randomNumber);
    $("h2").text(randomNumber);
 })
});
  
