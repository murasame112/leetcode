function letterCombinations(digits: string): string[] {
	if (digits.length === 0) return [];
  const phoneLetters = new Map();
	phoneLetters.set("2", "abc");
	phoneLetters.set("3", "def");
	phoneLetters.set("4", "ghi");
	phoneLetters.set("5", "jkl");
	phoneLetters.set("6", "mno");
	phoneLetters.set("7", "pqrs");
	phoneLetters.set("8", "tuv");
	phoneLetters.set("9", "wxyz");
	
	//let chars = digits.split('');
	let combLength = digits.length;
	let combinations: string[] = [];
	let combination: string = "";

	const solve = (combination: string, index: number)=>{
		if(combination.length == combLength){
			combinations.push(combination);
			return
		}

		let key = digits[index];
		let letters = phoneLetters.get(key).split('');

		letters.forEach((element: string) => {
			solve(combination + element, index + 1)
		});
		
	}

	solve(combination, 0);

	return combinations;
};


let digits = "23";
console.log(letterCombinations(digits));

