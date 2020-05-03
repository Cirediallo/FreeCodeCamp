function bouncer(arr) {
  // ========== Naïve way
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i])
      res.push(arr[i])
  }
  return res;
  
  // ========== With filter
  let ret = arr.filter(function(elt){
    if(elt !== false || elt !== null || elt !== 0 || elt !== "" || elt !== undefined || elt !== NaN){
      return elt;
    }
  });
  return ret;
  
  // === or
  return arr.filter(Boolean);
  
}
