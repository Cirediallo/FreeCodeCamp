var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  
  this.forEach((elt) => {
    if(callback(elt)){
      newArray.push(elt)
    }
  });
  
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
