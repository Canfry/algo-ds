function selectionSort(arr) {
    let min;
      for (i = 0; i < arr.length; i++) {
	min = i;
	for (j = i + 1; j < arr.length; j++) {
	  if (arr[j] < arr[min]) {
	    min = j;
	  }

	}
	if (i !== min) {
	  let temp = arr[i];
	  arr[i] = arr[min];
	  arr[min] = temp;
	}

      }
      return arr;
}



console.log(selectionSort([5, 3, 4, 1, 2]));
