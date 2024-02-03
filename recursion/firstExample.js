function countDown(num){
	if(num <= 0){
		console.log('All Done!');
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}

//countDown(8);


function sumRange(num){
	if(num === 1) return 1;
	return num + sumRange(num - 1);
}

//console.log(sumRange(3));


// Factorial Iteratively
function factorial(num){
	let total = 1;
	for(let i = num; i > 0; i--){
		total *= i;
	}
	return total;
}

console.log(factorial(4));


// Factorial Recursively
function factorial2(num){
	if(num === 1) return 1;
	return num * factorial2(num - 1)
}

// console.log(factorial2(3));


// Helper Method Recursion

function collectOddValues(array){
	let result = [];

	function helper(helperInput){
		if(helperInput.length === 0){
			return;
		}

		if(helperInput[0] % 2 !== 0){
			result.push(helperInput[0]);
		}

		helper(helperInput.slice(1))
	}

	helper(array)

	return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));


// Pure Recursion

function getOddValues(array){
	let newArray = [];

	if(array.length === 0){
		return newArray;
	}

	if(array[0] % 2 !== 0){
		newArray.push(array[0]);
	}

	newArray = newArray.concat(getOddValues(array.slice(1)));
	return newArray;
}

console.log(getOddValues([1, 2, 3, 4, 5]));




















