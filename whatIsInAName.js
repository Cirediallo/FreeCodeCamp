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
  
  // ========== OR
  let srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  
  
  
  // ========== With map and reduce
  let srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
