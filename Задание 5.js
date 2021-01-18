const power = (x , n) => {
  
  if(x, n >0 && (x^0) === x && (n^0) === n){
  const result = x ** n;
  return result;
  }
  else{
    console.log("Введите натуральные числа")
  }
}

console.log(power(5, 5))
