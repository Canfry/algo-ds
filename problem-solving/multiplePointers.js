// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    console.log(arr[leftPointer]);
    console.log(arr[rightPointer]);
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let count = 1;
  while (leftPointer < rightPointer) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      count++;
      rightPointer--;
      if (arr[rightPointer] === arr[rightPointer - 1]) {
        rightPointer--;
      }
    } else {
      rightPointer--;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 2, 2]));

// Easy Way
// function countUniqueValues(arr) {
//   let set = new Set(arr);
//   return set.size;
// }

// Colt Solution

function solution(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(solution([1, 1, 1, 1, 1, 2, 2, 2, 3]));
