function translatePigLatin(str) {
// ===============  Naïve way
  if(str.charAt(0) === 'a' || str.charAt(0) === 'e' || str.charAt(0) === 'i' || str.charAt(0) === 'o' || str.charAt(0) === 'u'){
    return str+"way";
  }
  let i = 0;
  let newStr;
  let wSplit = str;
  let toConcat = [];
  let isTrue = true;
  
  while(isTrue){
    wSplit = wSplit.split('');
    if(wSplit[i] != 'a' && wSplit[i] != 'e' && wSplit[i] != 'i' && wSplit[i] != 'o' && wSplit[i] != 'u'){
      toConcat.push(wSplit[i]);
      wSplit.shift();
      wSplit = wSplit.join('')  
    }else{isTrue = false; break;}
    newStr = wSplit;
  }
    return newStr.concat(toConcat.join(''))+"ay"
   
   // =============== with Regex
  let consonantReg = /^[^aeiou]+/;
  let extractConsonants = str.match(consonantReg)
  
  return (extractConsonants !== null) ? 
                str.replace(consonantReg, "")
                .concat(extractConsonants)
                .concat("ay") 

                : str+"way"
}

console.log(translatePigLatin("glove"));
