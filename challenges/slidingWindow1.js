// Given an array of integers and a number, write a function called MaxSubarraySum, which finds the maximum sum of subarray with the
// length of the number passed to the function.
// Note that subarray must consist of consecutive elements form th eoriginal array. In the first example below
// [100, 200, 300] is a subarray of the original array, but [100, 200] is not.
// maxSubArraySum([100, 200, 300, 400], 2)

function maxSubArraySum(arr, num){
	let maxSum = 0;
	let tempSum = 0;

	if(arr.length < num){
		return null;
	}

	for(let i = 0; i < num; i++){
		maxSum += arr[i];
	}
	tempSum = maxSum;

	for(i = num; i < arr.length; i++){
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
