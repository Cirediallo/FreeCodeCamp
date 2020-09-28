// ==================== Solution 1
function telephoneCheck(str) {
  let reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return reg.test(str)
  
}

// ==================== Solution 2 from FCC's solution
function telephoneCheck(str) {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
}

/*
* TODO
*/
// ==================== Solution 3
function telephoneCheck(str){
  
  
  // Set up your Booleans here
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasPermittedCharsOnly = false;
  let hasCorrectParentheses = false;

  // Write regular expressions here so that the Booleans contain the correct values
  // INSERT CODE WITH REGEX HERE

  // Use the Booleans to return true or false, without needing to string together one complex regular expression
  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
    return false;
  } else if (hasElevenDigits && !startsWithOne) {
    return false;
  } else {
    return true;
  }
}
