nonMutatingSortd(arr) {
  // ========== With sort
  return [...arr].sort((a,b) => {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  
  // ========== With concat and sort
  return [].concat(arr).sort((a,b) => a -b)
}
