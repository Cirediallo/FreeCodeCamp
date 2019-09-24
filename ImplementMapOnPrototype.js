Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach((elt) => {newArray.push(callback(elt))})
  // ***** OR ****
  /*
  for(let elt of this){
    newArray.push(callback(elt))
  }
  */
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
