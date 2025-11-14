// https://leetcode.com/problems/decode-string/submissions/1829539701/?envType=study-plan-v2&envId=leetcode-75
function decodeString(s: string): string {
	let result = '';

	// function to check what is the number (assuming they can be longer than 1 digit)
	function checkCounter(currentString: string, currentPointerPosition: number): [number, number]{
		let numStr = '';
		while(currentPointerPosition < currentString.length && /^\d+$/.test(currentString[currentPointerPosition])){
			numStr += currentString[currentPointerPosition];
			currentPointerPosition++;
		}
		return [parseInt(numStr), currentPointerPosition];
	}

	// recursive function
	function recCall(callCount: number, currentString: string){
		let recRes = '';
		for(let i = 0; i < callCount; i++){
			let recPointer = 0;
			let recCallCount = 0;
			let bracketCount = 0;
			let bracketStartPointer = 0;
			while(recPointer < currentString.length){
				
				if(/^\d+$/.test(currentString[recPointer]) && recCallCount == 0){
					let checkCounterResult = checkCounter(currentString, recPointer);
					recCallCount = checkCounterResult[0];
					recPointer = checkCounterResult[1] - 1;
				}else if(currentString[recPointer] == '['){
					if(bracketStartPointer == 0){
						bracketStartPointer = recPointer;
					}
					bracketCount++;
				}else if(currentString[recPointer] == ']'){
					if(bracketCount == 1){
						recRes += recCall(recCallCount, currentString.slice(bracketStartPointer + 1, recPointer));
						bracketStartPointer = 0;
						recCallCount = 0;
						bracketCount = 0;	
					}else{
						bracketCount--;
					}
				}else{
						if(bracketCount == 0){
							recRes += currentString[recPointer];
						}
				}
				recPointer++;
			}
		}
			
		return recRes;
	}
	
	result += recCall(1, s);

	return result;
};

//const s = "3[a]2[bc]";
const s = "3[a2[bc]]2[d]";
//const s = "3[a3[c]z2[d]]2[cd]3[df]xcv";
//const s = "2[abc]3[cd]ef";
console.log(decodeString(s));

