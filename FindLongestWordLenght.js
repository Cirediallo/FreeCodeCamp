function findLongestWordLength(str) {
  // ======== Naïve form
  let s = str.split(" ")
  let great = s[0].length;
  for(let i = 1; i < s.length; i++){
    if(s[i].length > great)
      great = s[i].length
  }
  return great;
  
  // ======== With reduce
  return str.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0)
  
  // ======== With map
  return Math.max(...str.split(' ').map(elt => elt.length))
}
