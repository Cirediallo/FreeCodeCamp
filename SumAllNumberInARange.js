function sumAll(arr){
  // ========== Naïve Way 
  let sorted = arr.sort( function(a,b){ return a - b });
  let result = 0;
  for(let i = sorted[0]; i <= sorted[sorted.length-1]; i++){
    result += i;
  }
  return result;
  
  // ========== With Math.min and Math.max
  let sum = 0;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    sum += i;
  }
  return sum;
  
  // ========== With Arithmetic Progression summing formula
  const startNum = arr[0];
  const endNum = arr[1];
  const numberElementBetweenCount = Math.abs(startNum - endNum) + 1; //between 1 and 4 => |1-4| + 1 = 4, (1, 2, 3, 4), <=> 4 numbers

  const sum = ((startNum + endNum) * numberElementBetweenCount) / 2; // Arithmetic Progression summing
  return sum;
  
