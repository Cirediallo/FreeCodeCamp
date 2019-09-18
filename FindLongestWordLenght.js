function findLongestWordLength(str) {
  /*
  let lngest = "";
  let t = str.split(' ');
  for(let i = 0; i < t.length; i++){
    if(t[i].length > lngest.length){
      lngest = t[i];
    }
  }
  return lngest.length;
  */
  
  // === With reduce
  return str.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0)
}
