function searchInsert2(nums: number[], target: number): number {
	let start = 0;
	let end = nums.length-1;
	let mid = Math.floor(nums.length/2);
	let oldMid = mid;
	while(nums[mid] != target){
		if(end - start == 0){
			if(target > nums[end]){
				return end+1;
			}else if(target < nums[start]){
				return start;
			}else{
				return end;
			}
		}
		if(nums[mid] > target){
			oldMid = mid
			mid = Math.floor(oldMid/2);
			end = oldMid-1;
		}else{
			oldMid = mid;
			mid = oldMid + Math.floor(oldMid/2);
			start = oldMid+1;
		}
		
	}
	
	return mid;
};

function searchInsert(nums: number[], target: number): number {

	let left = 0;
	let right = nums.length-1;
	let mid = Math.floor((left + right)/2);

	while(left <= right){
		if(nums[mid] == target){
			return mid;
		}else if(nums[mid] > target){
			right = mid -1;
			mid = Math.floor((left + right)/2);
		}else{
			left = mid + 1;
			mid = Math.floor((left + right)/2);
		}
	}
	return left;
};

let nums = [1,3,5,6];
let target =  0;

console.log(searchInsert(nums, target));