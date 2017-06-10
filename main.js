$ ( document ).ready(function(){
  var num1 = 1;
  var num2 = 10000;
  $("#findNumber").click(function() {
    var nums = [];
    var x = $('#minimumId').val()
    var y = $('#maximumId').val()
    num1 = parseInt(x);
    num2 = parseInt(y);
    
    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    
    
    
  }

    
    
    
    console.log(randomNumber);
    $("h2").text(randomNumber);
 })
});
  
