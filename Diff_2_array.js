function diffArray(arr1, arr2) {
  var newArr = [...arr1,...arr2];
  let diff = newArr.filter((elt) => {
    return !(arr1.includes(elt) && arr2.includes(elt));
  });
  return diff;
}
