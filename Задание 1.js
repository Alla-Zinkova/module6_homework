function numbersEvenOdd(){
  
let arr = [1, 1, 4, null, 0, 0, 32, "поропроп", NaN, "", 1.4, 12, 3];
let sum_odd = 0;
let sum_even = 0;
let sum_zero = 0;
let odd;

for (let i = 0; i < arr.length; i++){
  
  if(Number.isInteger(arr[i])){
   odd = arr[i] %2;
   sum_odd += odd;
  }
  
   if(arr[i] === 0){
    sum_zero += 1;
  } 
  
  if(odd === 0 && Number.isInteger(arr[i])){
    sum_even += 1;
  }
  
}
console.log(`Кол-во нечетных элементов: ${sum_odd}`);
console.log(`Кол-во четных элементов: ${sum_even - sum_zero}`);
console.log(`Кол-во нулевых элементов: ${sum_zero}`);

}

numbersEvenOdd();
