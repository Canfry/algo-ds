// Write a function called averagePair. Given a sorted array of integers and a target average determine if there is a pair 
// of values in the array where the average of the pair equals the target average.
// There may be more that one pair that matches the average target.

function averagePair(arr, target){
	let leftPointer = 0;
	let rightPointer = arr.length - 1;
	let averagePair = (arr[leftPointer] + arr[rightPointer]) / 2

	for(let i = 0; i < arr.length; i++){
		if ((arr[leftPointer] + (arr[leftPointer] + 1)) / 2 === target || averagePair === target){
			return true;
		} else if(averagePair < target){
			leftPointer++;
		} else {
			rightPointer--;
		}
		
	}
	return false
}

console.log(averagePair([1, 2, 3], 2.5))
