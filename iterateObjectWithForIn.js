function countOnline(usersObj) {
  let isOnline = 0;
  for(let elt in usersObj){
    if(usersObj[elt].online == true){isOnline++}
  }
  return isOnline;
}
