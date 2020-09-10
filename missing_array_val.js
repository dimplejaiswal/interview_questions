//Question - FInd the missing value of an sorted array.

//Answer 1
function findMissingVal(val) {
    for(let i = 0 ; i< val.length; i++) {
      if ( val[i] !== i+1) {
        return val[i] - 1;
      }
    }
  return -1;
}

console.log(findMissingVal([1,2,3,4,5,7,8,9,10,11])); //6
