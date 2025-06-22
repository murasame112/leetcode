// O(n)
function mergeAlternately(word1: string, word2: string): string {

	let result = '';
	let pointer = 0;
	while(true){
		if(word1[pointer]){
			result += word1[pointer];
		}
		else{
			result += word2.slice(pointer);
			return result;
		}

		if(word2[pointer]){
			result += word2[pointer];
		}
		else {
			result += word1.slice(pointer + 1);
			return result;
		}
		pointer++;
	}
};

let word1 = 'abcdw';
let word2 = 'pq';

// let word1 = 'ab';
// let word2 = 'pqrs';
// let word1 = 'abcd';
// let word2 = 'pq';

console.log(mergeAlternately(word1, word2));