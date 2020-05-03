function getIndexToIns(arr, num) {
  // ========== Naïve way
  arr.sort((a,b) => a -b);
  let rep;
  let x = arr[0];
  if(num === x || arr.length == 0){return 0;}
  
  for(let i = 1; i <= arr.length; i++){
    if(num > x && num <= arr[i]){
      return i;
    }else if(i == arr.length){
      return arr.length;
    }else{
      x = arr[i];
    }
  }
  return rep;

  // ==== or
  arr.sort(function(a, b){
    return a - b;
  });
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      return i;
    }
  }
  return arr.length;
  
  // ========== With sort and indexOf
  arr.push(num)
  return arr.sort((a,b) => a - b).indexOf(num)
  
}

getIndexToIns([10, 20, 30, 40, 50],35);
