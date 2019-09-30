function sumAll(arr){
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;
  }
  return sum;
}
  
  /*
    ==== SOLUTION FROM FCC
  {
    // Using ES6 arrow function (one-liner)
    var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = arr[0];
    var lastNum = arr[1];
    // Using Arithmetic Progression summing formula

    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
  },
  
    
  */
