function reverseWords(s: string): string {
  let start = s.length - 1;
	let end = start;
	let result = '';
	if(end == 0){
		return s[end];
	}
	while(end > 0){
		while(s[end] != ' ' && end > 0){
			end--;
		}
		let endL = (end > 0 || s[end] == ' ') ? end + 1 : end; 
		result += s.slice(endL, start + 1);
		result += ' ';
		while(s[end] == ' '){
			end--;
		}
		start = end;
		if(start == 0 && s[1] == ' '){
			result += s[0];
		}
	}

	return result.trim();
};
//const s = "the sky is blue";
//const s = "  hello world  ";
//const s = "a good   example";
//const s = " asdasd df f";
//const s = "a";
const s = "aa";
console.log(reverseWords(s));
// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75