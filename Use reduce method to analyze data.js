function getRating(watchList){
  // ========== 1st Way
  let averageRating;
  let tmp = watchList.map(elt => ({
    director: elt["Director"],
    imdbRating: elt["imdbRating"]
  })).filter(elt => elt["director"] === "Christopher Nolan")

  averageRating = tmp.map(elt => parseFloat(elt["imdbRating"])).reduce((acc, curr) => (acc + curr) )
  return averageRating/tmp.length;
  
  // ========== 2nd Way
  let total = watchList.filter(elt => elt.Director === "Christopher Nolan")
                       .map(obj => parseFloat(obj.imdbRating)).reduce((a,b) => a +b);

  let averageRating =  total / watchList.filter(elt => elt.Director === "Christopher Nolan").length
  
  // ========== 3rd Way
  let averageRating = watchList.filter((elt) => elt.Director == "Christopher Nolan").map(function(elt) {
  return Number(elt.imdbRating);
  }).reduce(
    (acc, cur) => acc + cur
  ) / watchList.filter((elt) => elt.Director == "Christopher Nolan").length;

}
