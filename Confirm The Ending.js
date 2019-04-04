function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let taille = target.length;
  return str.slice(-taille) === target ? true : false;;
  
}
