function repeatStringNumTimes(str, num) {
  let s = "";
  if(num <= 0){return s;}
  else {
    
    for(let i = 0; i < num; i++){s += str}
  }
  return s;
  //OR 

  if(num <= 0){return "";}
  return str+repeatStringNumTimes(str, num-1)
}

console.log(repeatStringNumTimes("abc", 3));
