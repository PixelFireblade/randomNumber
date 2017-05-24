$ ( document ).ready(function(){
  $("#findNumber").click(function() {
    var nums = [];
    var x = $('#minimumId').val()
    var y = $('#maximumId').val()
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    
    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    
    
    while $.inArray(randomNumber, nums){
       var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    }
    else {
       nums.push(randomNumber);
    }
   
    
    
    
    console.log(randomNumber);
    $("h2").text(randomNumber);
 })
});
  
