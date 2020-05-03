function mutation(arr) {
  // ========== Naïve Procedural way
  let t1 = arr[0].toLowerCase();
  let t2 = arr[1].toLowerCase();
  for(let i = 0; i < t2.length; i++){
    if(t1.indexOf(t2[i]) < 0){return false;}
  }
  return true;
  
  // ========== Declarative way with split and every combined to indexOf
  return arr[1].toLowerCase().split("").every(function(elt){
    console.log(elt)
    return arr[0].toLowerCase().indexOf(elt) != -1
  })
}
