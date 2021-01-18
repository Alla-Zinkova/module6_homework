function primeNumbers(num){
  
  if (num < 1000){
    
    if (num == 2){
      console.log("Число простое");
    }
    else if (num > 2 && (num ^ 0) === num){
      
      for(i=2; i < num; i++){
        
        if (num % i === 0){
         return  console.log("Число не простое");          
        }
      }
      
        console.log("Число простое");
    }
    else{
      console.log("Число не простое");
    }
    
  }
  else{
    console.log("Данные не верны");
  }

}

primeNumbers(prompt("Введите число"));
