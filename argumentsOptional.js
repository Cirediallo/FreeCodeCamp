// ==================== Naïve way
function addTogether() {
  let first = arguments[0];
  
  let isNotNumber = function(arg){
    if(typeof arg !== "number"){return undefined;}
    else return arg
  }
  console.log(arguments.length) // return arg
  if(arguments.length > 1){
    let second = arguments[1];
    if(isNotNumber(first) !== undefined && isNotNumber(second) !== undefined){
      console.log("ok")
      return first+second;
    }
    else{
      console.log("is not")
      return undefined;
    }
  }else if(arguments.length == 1){
    if(isNotNumber(first) === undefined){
      return undefined;
    }else{
      return function(second){
        //console.log(second)
        if(isNotNumber(second) !== undefined){
          return first+second;
        }
        else {
          
          return undefined;
        }
      }
    }
  }
}

// ==================== With ternary  
function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}

// ==================== 2nd Ternary way 
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}
addTogether(2,3);
