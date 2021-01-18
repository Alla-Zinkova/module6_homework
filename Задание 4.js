function getNumber(firstNumber, lastNumber){
  
  let number = firstNumber
  
  let intervalId = setInterval(function(){
    console.log(number);
    
    if(number < lastNumber){
      number = number + 1;
      }
    else clearInterval(intervalId);
    
  }, 1000)
}

getNumber (1, 15)
