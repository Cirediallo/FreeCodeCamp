// ======================== Naïve way
function pairElement(str) {
  let result = [];
  let input = str.split('');
  input.map(elt => {
    let tmp = [];
    switch(elt){
      case 'G':
        tmp.push('G');
        tmp.push('C');
        result.push(tmp)
        break;
      case 'A':
        tmp.push('A');
        tmp.push('T');
        result.push(tmp)
        break;
      case 'C':
        tmp.push('C');
        tmp.push('G');
        result.push(tmp)
        break;
      case 'T':
        tmp.push('T');
        tmp.push('A');
        result.push(tmp)
        break;
    }
  });
  return result;
}

// ======================== With object
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
