function confirmEnding(str, target) {
  return str.substring(str.length-target.length) === target;

//OR

  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "an");
