// =============== Naïve way
function sumFibs(num) {
  let fibbo = [1,1];
  let curr = fibbo[1], prev = fibbo[0];
  let oddSum =0, i = 1, next = 0;
  while(true){
    next = prev + curr;
    fibbo.push(next);
    prev = fibbo[i];
    i++;
    curr = fibbo[i];
    if(next > num){break;}
  }
  fibbo.map(elt => {
    if(elt % 2 !== 0 && elt <= num){
      oddSum += elt;
    }
  });
  return oddSum;
}

// =============== Another Naïve way

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}
