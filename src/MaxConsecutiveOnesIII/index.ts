function longestOnes(nums: number[], k: number): number {
	let a = 0, b = 0, max = 0, counter = 0, zeroes = 0;
	if(nums[b] == 0) zeroes++;
	while(b < nums.length && a < nums.length){

		if(nums[b] == 1 || zeroes <= k){
			b++;
			if(nums[b] == 0) zeroes++;
		}
		
		if(zeroes == k + 1){
			counter = b - a;
			if(max < counter) max = counter;
			if(nums[a] == 0){
				zeroes--;
			}
			a++;
		}
	
	}
	counter = b - a;
	if(max < counter) max = counter;
	return max;
};

//const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2; //6
//const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3; //10
const nums = [0,0,0,0], k = 0; //0
//const nums = [1,1,1,1], k = 0; //4
console.log(longestOnes(nums, k));
