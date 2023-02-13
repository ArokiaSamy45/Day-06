const newArray=[1,3,2,5,10];
const myPrime = newArray.filter(num => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for(let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
});
console.log(myPrime);
