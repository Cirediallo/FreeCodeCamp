function spinalCase(str) {
  return str.split(/(?=[A-Z])|\s|_/).join('-').toLowerCase();
}

// Some example 
/*
This Is Spinal Tap => this-is-spinal-tap
thisIsSpinalTap => this-is-spinal-tap
AllThe-small Things => all-the-small-things
The_Andy_Griffith_Show => the-andy-griffith-show
*/
