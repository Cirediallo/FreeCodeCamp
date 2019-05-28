function diffArray(arr1, arr2) {
  var newArr = [...arr1,...arr2];
  return newArr.filter((elt) => {
    return !(arr1.includes(elt) && arr2.includes(elt));
  });
}
