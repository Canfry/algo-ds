function search(arr, val){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === val) return i;
	}
	return -1;
}

console.log(search([1, 2, 4 ,8, 77, 45, 33], 8));
