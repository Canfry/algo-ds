// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks wether there are any duplicates among
// the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args){
	let leftPointer = 0;
	let rightPointer = arguments.length - 1;
	
	while(leftPointer < rightPointer){
		if(arguments[leftPointer] === arguments[rightPointer]){
			return true
		} else {
			leftPointer++;	
		}
	}
	return false
}
console.log(areThereDuplicates(1, 2, 'Chris', 4, 4))
