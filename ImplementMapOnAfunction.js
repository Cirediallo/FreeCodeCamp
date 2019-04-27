Array.prototype.myMap = function(callback){
  var newArray = [];
  /* For each element we add the value with newArray 
  *** after job done within callback function ***
  */
  this.forEach(elt => newArray.push(callback(elt)));
  return newArray;

};
