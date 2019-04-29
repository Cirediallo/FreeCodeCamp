let total = watchList.filter(elt => elt.Director === "Christopher Nolan").map(obj => parseFloat(obj.imdbRating)).reduce((a,b) => a +b);

var averageRating =  total / watchList.filter(elt => elt.Director === "Christopher Nolan").length;
