function whatIsInAName(collection, source) {
// ========== Naïve way
  let arr = [];
  let sKeys = Object.keys(source)
  
  arr = collection.filter(function(elt){
    let isTrue = [];
    for(let i = 0; i < sKeys.length; i++){
      if(elt.hasOwnProperty(sKeys[i]) && elt[sKeys[i]] === source[sKeys[i]]){
        isTrue.push(true);
      }else{
        isTrue.push(false);
      }
    }
    if(isTrue.every(Boolean)){return true;}
    else{return false;}
  })
  return arr;
}
