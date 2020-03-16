function makeList(arr) {
  "use strict";
  const resultDisplayArray = [];
  for(let i = 0; i < arr.length; i++){
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  
  //OR
  
  const resultDisplayArray = arr.map(elt => `<li class="text-warning">${elt}</li>`);
  
  return resultDisplayArray;
}
