function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
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
}

//OR

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}

getIndexToIns([10, 20, 30, 40, 50],35);
