function longestSubarray(nums: number[]): number {
	// this is just a specific case of maxConsecutiveOnesIII, so i used the same code ¯\_(ツ)_/¯
	let a = 0, b = 0, max = 0, counter = 0, zeroes = 0;
	if(nums[b] == 0) zeroes++;
	while(b < nums.length && a < nums.length){

		if(nums[b] == 1 || zeroes <= 1){
			b++;
			if(nums[b] == 0) zeroes++;
		}
		
		if(zeroes == 2){
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
	return max - 1;
};


const nums = [1,1,1];
console.log(longestSubarray(nums));