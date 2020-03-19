function isEveryoneHere(obj) {
  return ['Alan', 'Ryan', 'Jeff', 'Sarah'].every(elt => obj.hasOwnProperty(elt));
  
  // OR
  
  if(obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') &&  obj.hasOwnProperty('Ryan') &&  obj.hasOwnProperty('Sarah') ){
    return true;
  }
    
  return false;
}
