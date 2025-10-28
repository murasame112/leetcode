function maxOperations(nums: number[], k: number): number {
	let counter = 0, diff = 0;
	const set:any = {};

	for(let i = 0; i < nums.length; i++){
		diff = k - nums[i];
		if(set[diff] > 0){
			counter++;
			set[diff] = set[diff] - 1;
		}else{
			if(set[nums[i]] !== undefined){
				set[nums[i]] = set[nums[i]] + 1;
			}else{
				set[nums[i]] = 1;
			}
			
		}
	}

	return counter;
};

//const nums = [1,2,3,4], k = 5;
//const nums = [3,1,3,4,3], k = 6;
//const nums = [3,2,3,3,2], k = 5;
const nums = [2,2,2,3,1,1,4,1], k = 4;
console.log(maxOperations(nums, k));




// === solution 1 (bad one, brute force)
/*
function maxOperations(nums: number[], k: number): number {
	if (nums.length == 1){
		if(nums[0] == k) return 1;
		return 0; 
	}

	let counter = 0, a = 0, b = 1;
	let diff = 0;

	while(a < nums.length){
		diff = k - nums[a];
		if(nums[b] == diff){
			nums[a] = 0;
			nums[b] = 0;
			counter++;
			a++;
			while(nums[a] == 0 && a < nums.length){
				a++;
			}
			b = a + 1;
			while(nums[b] == 0 && b < nums.length){
				b++;
			}

		}else{
			b++;
			while(nums[b] == 0 && b < nums.length){
				b++;
			}
			if(b >= nums.length){
				a++;
				while(nums[a] == 0 && a < nums.length){
					a++;
				}
				b = a + 1;
				while(nums[b] == 0 && b < nums.length){
					b++;
				}
			}

		}
	}
	return counter;
};
*/

// == solution 2 - with sorting
/*
function maxOperations(nums: number[], k: number): number {
	let counter = 0, a = 0, b = nums.length - 1;
	nums.sort((a,b) => a-b);

	while(a < b){
		if(nums[a] + nums[b] == k){
			counter++;
			a++;
			b--;
		}else if(nums[a] + nums[b] > k){
			b--;
		}else{
			a++;
		}
	}

	return counter;
};

*/


// solution 3 - set, but a slow one

/*
function maxOperations(nums: number[], k: number): number {
	let counter = 0, diff = 0;
	const set:any = {};

	for(let i = 0; i < nums.length; i++){
		if(!set[nums[i]]){
			set[nums[i]] = 1;
		} 
		else {
			set[nums[i]] = set[nums[i]]+1;
		}
	}
	
	for(let i = 0; i < nums.length; i++){
		diff = k - nums[i];
		if(diff == nums[i]){
			if(set[diff] > 1 && set[nums[i]] > 1){
				set[diff] = set[diff] - 1;
				set[nums[i]] = set[nums[i]] - 1;
				counter++;
			}
		} else {
			if(set[diff] > 0 && set[nums[i]] > 0){
				set[diff] = set[diff] - 1;
				set[nums[i]] = set[nums[i]] - 1;
				counter++;
	
			}
		} 

	}

	return counter;
};
*/