function pivotIndex(nums: number[]): number {
	let leftSum = 0, rightSum = 0, pivot = 0 ;
	for(let i = 0; i < nums.length; i++){
		rightSum += nums[i];
	}
	while(pivot < nums.length){
		rightSum -= nums[pivot];
		if(leftSum == rightSum) return pivot;
		leftSum += nums[pivot];
		pivot++;
	}

	return -1;
};

const nums = [1,7,3,6,5,6];
//const nums = [1,2,3];
//const nums = [2, 1, -1]; // powinno byc 0

console.log(pivotIndex(nums));