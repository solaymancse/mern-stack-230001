var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 5; i++) {
  
  fib[i] = fib[i-1] + fib[i-2]
  console.log(fib[i]);
}