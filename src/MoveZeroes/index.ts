/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	if (nums.length <= 1) return;
	let a = 0, b = 0;
	let bufor = 0;

	while(b <= nums.length - 1){
		if(nums[a] == 0 && nums[b] != 0){
			bufor = nums[a];
			nums[a] = nums[b];
			nums[b] = bufor;
		} 

		if(nums[a] != 0){
			a++;
		}
		if(nums[b] == 0 || b <= a){
			b++;
		}
	}

};

//const nums = [2,0,1,0,3,12];
//const nums = [0];
//const nums = [1];
//const nums = [2,1];
const nums = [0,0,0,0,0,2,5]
console.log(moveZeroes(nums));