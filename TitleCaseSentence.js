 function titleCase(str) {
  let res = str.toLowerCase().split(" ");
  
  res = res.map(elt => elt.replace(elt.charAt(0), elt.charAt(0).toUpperCase()));
  
  return res.join(' ');
}
