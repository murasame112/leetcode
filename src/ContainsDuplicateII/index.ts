function containsNearbyDuplicate(nums: number[], k: number): boolean {


	const sliding = new Map();
	let left = 0;
	for(let i = 0; i < nums.length; i++){
		if(Math.abs(sliding.get(nums[i]) - i) <= k){
			return true;
		}
		sliding.set(nums[i], i);
		if(sliding.size > k+1){
			sliding.delete(nums[left]);
			left++;
		}
	}

	return false;
};

//let nums = [1,2,3,1,2,3];
//let k = 2 ;
let nums = [1,0,1,1]
let k = 1 ;

console.log(containsNearbyDuplicate(nums, k));