$ ( document ).ready(function(){
  
  
  $("#findNumber").click(function() {
    var nums = [];
    var x = $('#minimumId').val()
    var y = $('#maximumId').val()
    
    
    if (x.length > 0) {
      var num1 = 1;
    }
    
    else if (y.length > 0) {
      var num2 = 10000;
    }
    else {
      var num1 = parseInt(x);
      var num2 = parseInt(y);
    }
    
    var randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    
    
    
  

    
    
    
    console.log(randomNumber);
    $("h2").text(randomNumber);
 })
});
  
