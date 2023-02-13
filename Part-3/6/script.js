const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 
const add = (a, b) => a + b;
const total = num.reduce(add);
console.log(total);
