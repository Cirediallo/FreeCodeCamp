Array.prototype.myFilter = function(callback){
  // ========== With forEach
  var newArray = [];
  
  this.forEach((elt) => {
    if(callback(elt)){
      newArray.push(elt)
    }
  });
  
  return newArray;

};

// ========== With for loop
Array.prototype.myFilter = function(callback){
  var newArray = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i])){
      newArray.push(this[i])
    }
  }
  return newArray;
};
