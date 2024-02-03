// Write a function calle sameFrequency(num1, num2)

function sameFrequency(num1, num2) {
	n1 = num1.toString()
	n2 = num2.toString()

	if(n1.length !== n2.length){
		return false;
	}

	let frequency1 = {}
	let frequency2 = {}

	for(const val of n1){
		frequency1[val] = (frequency1[val] || 0) + 1;
	}

	for (const val of n2) {
		frequency2[val] = (frequency2[val] || 0) + 1;
	}

	for(const key in frequency1){
		if(!(key in frequency2)){
			return false;
		}
	}

	return true
}

console.log(sameFrequency(182, 281))
