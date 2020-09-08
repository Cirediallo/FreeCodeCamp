function fearNotLetter(str) {
  let checkString = 'abcdefghijklmnopqrstuvwxyz';
  let extract = checkString.slice(checkString.indexOf(str[0]), checkString.indexOf(str[0]) + str.length+1);
  let ret;
  if(str.localeCompare(extract) == 0){return undefined;}
  extract.split('').map(elt => {
    if(str.indexOf(elt) == -1){
      ret = elt;  
    }
  })
  
  return ret;
}
