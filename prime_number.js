// Check Prime Number
function checkPrimeNumber(num){
    var mid = Math.floor(num/2);
    
    for (let val = 2; val <= mid ; val++){
        if (num % val === 0 ) {
            return false;
        }  
    }
    return true; 
}
    
console.log(checkPrimeNumber(3)); //True
console.log(checkPrimeNumber(17)); //True
console.log(checkPrimeNumber(15)); //False
console.log(checkPrimeNumber(29)); //True