// Naive version

function naiveBubbleSort(arr) {
	for (i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

/* console.log(naiveBubbleSort([28, 5, 44, 7, 11, 55])) */

// Problem here is that for the last iteration we are comparing undefined to a number (out of range).

// Optimized version
function bubbleSort(arr) {
	let noSwaps;
	for (i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr
}

console.log(bubbleSort([44, 37, 5, 55, 78]))


function test(arr) {
	let noSwaps;
	for (i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (j = 0; j < i - 1; i++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (!noSwaps) break;
	}
	return arr;
}

console.log(test([44, 55, 12, 8, 77, 63]))
















