// Write a function called isSubsequence which takes in two strings and checks wether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function should check wether the characters in the first string appear somwhere in the second
// string without their order chanching.

function isSubsequence(str1, str2){
	let i = 0;
	let j = 0;
	if(!str1) return true;
	while(j < str2.length){
		if(str2[j] === str1[i]) i++;
		if(i === str1.length) return true;
		j++;
	}
	return false;
}

console.log(isSubsequence('Hello', 'Hello World'));
