function removeDuplicates(nums: number[]): number {
	let left: number = 0;
	let right: number = 1;
	while(right <= nums.length-1){
		if(nums[left] == nums[right]){
			nums.splice(right,1);
		}else{
			left++;
			right++;
		}
	}
	return nums.length;
};

const nums: number[] = [1,1,2];
//const nums: number[] = [0,0,1,1,1,2,2,3,3,4];
//const nums: number[] = [1,1];
console.log(removeDuplicates(nums));