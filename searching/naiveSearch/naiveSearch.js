// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, 
// increment the count of matches
// Return the count

function naiveSearch(arr, pattern){
	let count = 0;
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < pattern.length; j++){
			if(pattern[j] !== arr[i + j]) break;
			if(j === pattern.length - 1) count++;
		}
	}
	return count;
}

console.log(naiveSearch("lorie loled", "lo"));
