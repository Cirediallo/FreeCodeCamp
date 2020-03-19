













function largestOfFour(arr) {
  /et res = [];
  for(let i = 0; i < arr.length; i++){
    res.push((Math.max(...arr[i])))
  }
  return res
  
  
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });

}
