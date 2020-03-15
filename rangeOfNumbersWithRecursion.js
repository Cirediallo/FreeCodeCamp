function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [endNum];
  }else{
    var result = rangeOfNumbers(startNum+1, endNum);
    result.unshift(startNum)
    return result;

  }
}

// OR
function rangeOfNumbers(startNum, endNm){
  return (startNum === endNum) ? [endNum] : [startNum, ...rangeOfNumbers(startNum+1, endNum)]
}
