function sum(base){
  return function(num){
    return base + num;
  }
}

var add = sum(5);
console.log(add(7));
