var globalTitle = "  Winter Is Coming";

function urlSlug(title) {
  
  //return title.split(/\s+/).join('-').trim().toLowerCase();

  //*** OR */

  return title.split(/\s+/).filter((elt) => elt != "").join('-').toLowerCase();
}

urlSlug(globalTitle); //Should return "winter-is-coming"
