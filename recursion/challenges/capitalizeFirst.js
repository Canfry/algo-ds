function capitalizeFirst(arr){
	let newArray = [];

	if(arr.length < 1) return newArray;

	newArray.push(arr[0][0].toUpperCase() + arr[0].slice(1));
	return newArray.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['hello', 'world', 'chris']));
