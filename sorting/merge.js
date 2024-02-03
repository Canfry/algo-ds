// function to merge 2 sorted arrays
function merge(arr1, arr2) {
	let resultArray = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j] || arr2.length === 0) {
			resultArray.push(arr1[i]);
			i++;
		} else if (arr2[j] < arr1[i] || arr1.length === 0) {
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

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
