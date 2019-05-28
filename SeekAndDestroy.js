function destroyer(arr){
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
