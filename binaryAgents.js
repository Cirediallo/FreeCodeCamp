// ==================== Naïve way
function binaryAgent(str) {
  let bitmap = {
    "0": Math.pow(2,7),
    "1": Math.pow(2,6),
    "2": Math.pow(2,5),
    "3": Math.pow(2,4),
    "4": Math.pow(2,3),
    "5": Math.pow(2,2),
    "6": 2,
    "7": 1
  };
  
  let toDec = [];
  let toString = '';
  let strSplit = str.split(' ')
  //console.log(strSplit)
  .map(binary => {
    let binarySplit = 
        binary.split('')
        let indices = []
        let sum = 0;
        let idx = binarySplit.indexOf('1');
        while(idx != -1){
          indices.push(idx);
          idx = binarySplit.indexOf('1', idx+1);
        }
    //get the decimal translation
    indices.map(elt => {
      sum += bitmap[elt]
    })
    toDec.push(sum)
  });
  //console.log(toDec)
  toString += toDec.map(elt => {
    return String.fromCharCode(elt);
  }).join('');
  console.log(toString);
  return toString;
}



// ==================== Other way
/*
  First we use split() to be able to work on each character as an Array element
  Then use map() to process each element from binary to decimal using pareseInt()
  Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
  However fromCharCode() expects a series of numbers rather than an Array!
    We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator 
*/
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}


// ==================== OR
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*
    using the radix (or base) parameter in parseInt, we can convert the binary
    number to a decimal number while simultaneously converting to a char
  */

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}
