var filteredList = [];
watchList.filter(obj => {
  if(parseInt(obj.imdbRating,10) >= 8){
    return obj;
  }
}).map(obj => {filteredList.push({"title" : obj.Title, "rating" : obj.imdbRating})});
