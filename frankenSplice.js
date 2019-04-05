function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copy = [...arr2];
  for(let i= 0; i < arr1.length; i++){
    copy.splice(n,0,arr1[i]);
    n++;
  }
  return copy;
}
