function numberCompare(num1, num2){
	return num1 - num2; // => num1 will be before num2
}

console.log([6,4,15,10].sort(numberCompare)); // => [4, 6, 10, 15]


function compareByLength(str1, str2){
	return str1.length - str2.length; // => str1 will be before str2
}

console.log(['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLength)); // => ["Colt", "Steele", "Algorithms", "Data Structures"]
