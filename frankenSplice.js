function frankenSplice(arr1, arr2, n) {
  let copy = [...arr2];
  for(let i= 0; i < arr1.length; i++){
    copy.splice(n,0,arr1[i]);
    n++;
  }
  return copy;
  
  // ========== With splice and slice
  let tmp = arr2.slice(arr2.length-n)
  return arr2.slice(n-n,n).concat(arr1).concat(tmp);
  
  // ==== or
  let copy = arr2.slice();
  copy.splice(n, 0, ...arr1);
  return copy;
}
