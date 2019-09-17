function reverseString(str) {
  //Without reverse
  /*let r = str.split('');
  for(let i = str.length -1, j = 0; i >=0, j < str.length; i--,j++){
    r[j] = str[i]
  }
  return r.join('');
  */
  //With reverse
  return str.split('').reverse().join('')
}
