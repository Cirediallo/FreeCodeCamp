// ==================== Naïve way
function steamrollArray(arr) {
  let flatted = [];
  let toflat = function(elt){
    if(Array.isArray(elt)){
      for(let single in elt){
        toflat(elt[single])
      }
    }else{flatted.push(elt)}
  }
  
  arr.map(elt => {toflat(elt)})
  return flatted;
}

// ==================== With spread operator and some 

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
