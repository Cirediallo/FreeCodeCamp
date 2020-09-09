// =============== Naïve way
function uniteUnique(arr) {
  let args = Array.from(arguments)
  let endTab = 
  args.join().split(',').reduce(
    function(acc, current){
      if(acc.indexOf(current) === -1){
        acc.push(current)
      }
      return acc;
    }, []).map(elt => {
      return parseInt(elt)
    })
    console.log(endTab)
  return endTab;
}

// =============== Other Naïve way
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

// =============== With Set
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}
