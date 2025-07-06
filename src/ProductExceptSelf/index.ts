function productExceptSelf(nums: number[]): number[] {
	const answer: number[] = [];
	let zeroCount = 0;
	let result = 1;

	for(let i = 0; i < nums.length; i++){
		if(nums[i] == 0){
			zeroCount++;
		}else{
			result *= nums[i];
		}
		if(zeroCount == 2){
			return new Array(nums.length).fill(0);
		}
	}

	if(zeroCount == 1){
		for(let k = 0; k < nums.length; k++){
			if(nums[k] == 0){
				answer.push(result);
			}else{
				answer.push(0);
			}
		}
	}else{
		for(let l = 0; l < nums.length; l++){
			answer.push(result / nums[l]);
		}
	}

	return answer;
};

//const nums = [1,2,3,4];
//const nums = [-1,1,0,-3,3];
const nums = [0,0];
console.log(productExceptSelf(nums));