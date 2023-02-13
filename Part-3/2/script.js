let n = 123;
console.log(add(n));
function add(n)
{
 let sum = 0;
 while (n) {
   sum += n % 10;
   n = Math.floor(n / 10);
 }
 return sum;
}

