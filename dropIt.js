// ======================= Naïve way
function dropElements(arr, func) {
  let index = -1;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      index = arr.indexOf(arr[i]);
      break;
    }
  }
  if(index < 0){return []}
  return arr.slice(index);
}

// ======================= With shift
function dropElements(arr, func) {
  // drop them elements.
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (func(arr[0])) {
      break;
    } else {
      // we delete the first array's element: it doesn't fit the condition
      arr.shift();
    }
  }
  //we return the initial array modified
  return arr;
}

// ======================= With slice and findIndex
function dropElements(arr, func){
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length)
}
