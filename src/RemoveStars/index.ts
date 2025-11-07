function removeStars(s: string): string {
	const stack: string[] = [];
	let pointer = 0;
	while(pointer < s.length){
		if(s[pointer] == '*'){
			stack.pop();
		}else{
			stack.push(s[pointer]);
		}
		pointer++;
	}

	return stack.join('');
};

const s = "leet**cod*e";
//const s = "erase*****";
console.log(removeStars(s));
