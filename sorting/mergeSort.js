// function to merge 2 sorted arrays
function merge(arr1, arr2) {
	let resultArray = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			resultArray.push(arr1[i]);
			i++;
		} else if (arr2[j] < arr1[i]) {
			resultArray.push(arr2[j]);
			j++;
		}  
		
	}
	while (i < arr1.length) {
		resultArray.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		resultArray.push(arr2[j]);
		j++;
	}
	return resultArray;
}

/* console.log(merge([1, 10, 50], [2, 14, 99, 100])); */




function mergeSort(arr){
	// base case
	if(arr.length <= 1) return arr;
	// split array into two halves
	// find the middle index;
	let mid = Math.floor(arr.length/2);
	let half1 = mergeSort(arr.slice(0,mid));
	let half2 = mergeSort(arr.slice(mid));
	return merge(half1, half2);
}


console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));













