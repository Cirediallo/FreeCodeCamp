function chunkArrayInGroups(arr, size) {
  // ========== With slice
  let response = [];
  for(let i = 0; i < arr.length; i+= size){
    let tmp = arr.slice(i, size+i)
    response.push(tmp)
  }
  return response;
  
  // ========== With splice
  let newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}



  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
