function binarySearch(arr, val){
	leftPointer = 0;
	rightPointer = arr.length - 1;
	middlePointer = Math.floor(leftPointer + rightPointer / 2);

	while(arr[middlePointer] !== val && leftPointer <= rightPointer){
		if(val < arr[middlePointer]){
			rightPointer = middlePointer - 1;
		} else {
			leftPointer = middlePointer + 1;
		}
		middlePointer = Math.floor((leftPointer + rightPointer) / 2);
	}
	if(arr[middlePointer] === val){
		return middlePointer;
	} else {
		return -1;
	}
	
}

console.log(binarySearch([1, 4, 6, 7, 8, 10, 12, 15, 18], 6))
