function search(nums: number[], target: number): number {

	let min = 0;
	let max = nums.length-1;
	let mid = Math.floor(min + (max - min)/2);
	console.log('min: ', min);
	console.log('max: ', max);
	console.log('mid: ', mid);
	console.log('---------------');
	while (min < max && nums[mid] !== target){
		console.log('min: ', min);
		console.log('max: ', max);
		console.log('mid: ', mid);
		console.log('---------------');
		if(nums[mid] > target){
			max = mid - 1;
			mid = Math.floor(min + (max - min)/2);
		} else if (nums[mid] < target){
			min = mid + 1;
			mid = Math.floor(min + (max - min)/2);
		}
	}

	if (nums[mid] === target){
		return mid;
	}

	return -1;
};

const nums = [-1,0,3,5,9,12];
const target = 9;
console.log(search(nums, target));
