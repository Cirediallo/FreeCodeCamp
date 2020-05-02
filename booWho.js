function booWho(bool) {
  
  if(bool === true || bool === false)
    return true;
  return false;
  
  // ========== With typeof
  if(typeof(bool) == "boolean"){return true;}
  else return false;
  
  // === or
  return typeof bool === 'boolean'
}
