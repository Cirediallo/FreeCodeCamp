// ==================== Solution 1
function rot13(str) {
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let newStr = [];
  str.split('').map(elt => {
    if(alphabet.indexOf(elt) < 0){
      newStr.push(elt)
    }else{
      let idx = alphabet.indexOf(elt) + 1;
      if((idx+13) > alphabet.length){
        newStr.push(alphabet[((idx+13) - 26) - 1])
      }else{
        newStr.push(alphabet[(idx+13) - 1])
      }
    }
  });
  newStr = newStr.join('');
  console.log(newStr)
  return newStr;
}

// ====================  Solution 2
function rot13(str) {
  // Split str into a character array
  return (
    str
      .split("")
      // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        var x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      })
      .join("")
  ); // Rejoin the array into a string
}

// ==================== Solution 3
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

// ==================== Solution 4
function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}

// ==================== Solution 5
function rot13(str) {
  str.toUpperCase(); // Convert `str` string to uppercase letters
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)

    for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
      for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
      if (arr[i] === abc[j]) {
        arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
      } else if (arr[i] === nop[j]) {
        arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
      }
    }
  }

  return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
}
