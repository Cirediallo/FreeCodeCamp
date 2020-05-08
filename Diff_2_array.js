function diffArray(arr1, arr2) {
  // ========== Naïve way with filter 
  let newArr = [];
  let merge = arr1.concat(arr2);
  
  newArr= (merge.filter(function(elt) {
     if( (arr1.includes(elt) && !arr2.includes(elt)) || 
          (!arr1.includes(elt) && arr2.includes(elt))){
       return elt;
     }
  }))
  return newArr;
  
  // ========== More concise with filter
  let newArr = [...arr1,...arr2];
  return newArr.filter((elt) => {
    return !(arr1.includes(elt) && arr2.includes(elt));
  });
  
  // ========== By using another function
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
