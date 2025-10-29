function findMaxAverage(nums: number[], k: number): number {
	let a = 0, avg = 0, sum = 0;
	for(let i = 0; i < k; i++){
		sum += nums[a + i];
	}
	avg = (sum/k);
	while((a + k) < nums.length ){
		sum -= nums[a];
		a++;
		sum += nums[(a + k  - 1)];
		if(avg <= (sum/k)){
			avg = (sum/k);
		}
	}

  return avg;
};

//const nums = [1,12,-5,-6,50,3], k = 4;
const nums = [5], k = 1;
console.log(findMaxAverage(nums, k));