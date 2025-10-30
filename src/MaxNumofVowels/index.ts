function maxVowels(s: string, k: number): number {
	let vowels: Record<string, number> = {a : 1, e : 1, i : 1, o : 1, u : 1};
	let a = 0;
	let counter = 0, max = 0;
	for (let i = 0; i < k; i++){
		if(vowels[s[i]]) counter++;
	}
	if(counter == k) return counter;
	max = counter;
	
	while (a + k <= s.length){
		if(vowels[s[a]]) counter--;
		a++;
		if(vowels[s[a + k-1]]) counter++;
		if(counter == k) return counter;
		if(counter > max) max = counter;
	}

	return max;
};

//const s = "abciiidef", k = 3;]
const s = "aeiou", k = 2;
//const s = "leetcode", k = 3
console.log(maxVowels(s, k));