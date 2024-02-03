// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// console.log(addUpTo(6));

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`); // 1.13s for first solution and 0.00006s for second solution

function CountUpAndDown(n) {
  console.log('Going up');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('Going down');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back Down! Bye');
}

CountUpAndDown(10);

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      console.log(i, j);
    }
  }
}
