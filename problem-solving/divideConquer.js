// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// Naive solution => Linear search
// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// Divide and Conquer => Binary Search => log(n) time complexity
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor(min + max) / 2;
    let currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(
  search([1, 4, 6, 8, 9, 10, 12, 15, 16, 18, 20, 22, 24, 26, 28], 28)
);
