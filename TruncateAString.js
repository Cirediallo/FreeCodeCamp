function truncateString(str, num) {
  // ========== Naïve way
  if(str.length <= num){return str;}
  else return str.slice(0, num)+"...";
  
  // ========== Ternary condition
  return num >= str.length ? str : str.substr(0,num) +'...';
  
  // ========== or
  return (str.length <= num) ? str : str.slice(0, num)+"...";
}
