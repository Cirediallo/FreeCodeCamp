function destroyer(arr){
  // ========== Naïve way
  
  let args = Array.from(arguments);
  
  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arguments[i] === arr[j]){delete arr[j]}
    }
  }
  let destroyed = arr.filter(
      elt => {
        if(elt){return elt}
      }
    )
  return destroyed;
  
  
  // ========== using delete
  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(argument[i] === arr[i]){delete arr[i];}
    }
  }
  return arr.filter(Boolean);
}


/* ===== ADVANCED SOLUTION ====== */

function destroyer(arr){
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
