function reverseVowels(s: string): string {
	const str = s.split('');
  const vowels = [
		'A', 'a',
		'E', 'e',
		'I', 'i',
		'O', 'o',
		'U', 'u'
	];
	let left = 0;
	let right = str.length - 1;
	while(left < right){
		while(!vowels.includes(str[left]) && left < str.length){
			left++;
		}
		while(!vowels.includes(str[right]) && right > 0){
			right--;
		}
		if(left > right){
			break;
		}

		let b = str[left];
		str[left] = str[right];
		str[right] = b;
		left++;
		right--;
	}
	return str.join('');
};

//const s = "IceCreAm";
//const s = "leetcode";
const s = 'ff';

/*
example:
IceCreAm
_c_Cr__m
AceCreIm
*/
console.log(reverseVowels(s));