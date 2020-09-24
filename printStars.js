/**
 * Print Stars 
 * @param {number} num number of line of stars
 * @returns {string} perpendicular triangle of stars
 */

 function printStars(num){
    var str='';
    for(let i=0; i<=n; i++){
      for(let j=0; j<(2*i + 1); j++){
        str= str+'*'
      }
      console.log(str);
    }
  }
  
  printStars(6);