function factorialize(num) {
  // ==== Without recursion
  /*
  let i = 1;
  let sum = 1;
  while(i <= num){
    sum *= i;
    i++;
  }
  return sum;
  */
  if(num === 0 || num === 1){
    return 1;
  }else{
    return num * factorialize(num - 1);
  }
  
}
