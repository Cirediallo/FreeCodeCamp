function mutation(arr) {
  let t1 = arr[0].toLowerCase();
  let t2 = arr[1].toLowerCase();
  for(let i = 0; i < t2.length; i++){
    if(t1.indexOf(t2[i]) < 0){return false;}
  }
  return true;
}
