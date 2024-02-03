// Pivot helper function
function pivot(arr, start = 0, end = arr.length - 1) {

	// Swap function
	// function swap(arr, i, j) {
	// 	let temp = arr[i];
	// 	arr[i] = arr[j];
	// 	arr[j] = temp;	
	// }	
	// ES2015 version
	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	let pivot = arr[start];
	let pivotIndex = start;

	// Loop through array
	for(let i = start + 1; i < arr.length; i++){
		if (arr[i] < pivot){
			pivotIndex++;
			swap(arr, pivotIndex, i);
		}
	}
	swap(arr, pivotIndex, start);
	console.log(arr)
	return pivotIndex;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
	let pivotIndex = pivot(arr, left, right); // 3
	// left
	quickSort(arr, left, pivotIndex - 1);
	// right
	quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
   
