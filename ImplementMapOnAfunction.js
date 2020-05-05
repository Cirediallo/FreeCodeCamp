Array.prototype.myMap = function(callback){
  // ========== With forEach
  var newArray = [];
  /* For each element we add the value with newArray 
  *** after job done within callback function ***
  */
  this.forEach(elt => newArray.push(callback(elt)));
  return newArray;

  
  // ========== With for loop
  let newArray = [];
  for(let i = 0; i < this.length; i++){
     newArray.push(callback(this[i], i, this))
  }
  return newArray;
};
