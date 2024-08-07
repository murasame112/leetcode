function removeElement(nums: number[], val: number): number {
	let k = 0;
	let pointer = nums.length-1;

	while (nums.length > 0){
		// checking for result
		if (k >= pointer){
			if (k == 0 && nums[k] == val){
				nums = [];
				return k;
			}
			if (k == pointer && nums[k] != val){
				return k+1;
			}
				return k;
		}

		// operations
		if (nums[pointer] == val){
			pointer--;
		} else if (nums[k] == val){
			nums[k] = nums[pointer];
			pointer --;
			k++;
		} else {
			k++;
		}
	}

	return k+1;    
};



// const nums = [0,1,2,2,3,0,4,2];
// const val = 2;

const nums = [4,5];
const val = 4;
console.log(removeElement(nums, val));


// first solution:
// function removeElement(nums: number[], val: number): number {
// 	let k = 0;
// 	let pointer = nums.length-1;

// 	while(nums.length > 0){
// 		if(pointer == k){
// 			if(k == 0 && nums[k] == val){
// 				nums = [];
// 				return k;
// 			}
// 			return k+1;
// 		}
// 		if(nums[pointer] == val){
// 			pointer--;
// 		}else if(nums[k] == val){
// 			let bufor = nums[k];
// 			nums[k] = nums[pointer];
// 			nums[pointer] = bufor;
// 		}else{
// 			k++;
// 		}
// 	}

// 	return k+1;    
// };