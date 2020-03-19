function findLongestWordLength(str) {
  let arr = str.split(' ');
  let w = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(w.length < arr[i].length){
      w = arr[i];
    }
  }
  return w.length;
  // OR

  return Math.max(...str.split(' ').map(elt => elt.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
