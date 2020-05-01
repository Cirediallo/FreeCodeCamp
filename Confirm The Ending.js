function confirmEnding(str, target) {
  // ========== Using slice
  let taille = target.length;
  return str.slice(-taille) === target ? true : false;
  // ====== OR
  return str.slice(str.length - target.length) === target;
  
  // ========== Using substr
  return str.substr(str.length-target.length) === target;
  
}
