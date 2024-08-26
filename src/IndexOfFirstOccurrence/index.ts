function strStr(haystack: string, needle: string): number {
	let left = 0;
	let right = 0;
	let index = -1;
	let nextOccurrence = -1;

	while(left <= haystack.length){
		if(haystack[left] === needle[right]){
			right++;
			if(index === -1){
				index = left;
			}
			if(nextOccurrence === -1 && haystack[left] === needle[0]){
				nextOccurrence = left;
			}
			if(right >= needle.length){
				return index;
			}
		}else{
			if(nextOccurrence !== -1){
				left = nextOccurrence;
			}
			nextOccurrence = -1;
			index = -1;
			right = 0;
		}
		left++;
	}
	
	return index;
};

const haystack = "mississippi";
const needle = "issip";
console.log(strStr(haystack, needle));