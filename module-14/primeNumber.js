
function isPrime(n){
    for(var i = 2; i < n; i++){
     if(n % i === 0){
        return "Not Prime Number";
     }
    }
   return 'Prime Number';
}

const result = isPrime(9)

console.log(result)