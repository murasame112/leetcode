function twoSum(nums: number[], target: number): number[] {

	const res:number[] = [];
	const recordNums: Record<number, number> = {};
	nums.forEach((element) => { 
		recordNums[element] = element;
	});

	for(let i = 0; i < nums.length; i++){
		let element = nums[i]
		let diff = target - element;
		if(diff in recordNums && nums.indexOf(recordNums[diff]) != i){
			res.push(i);
			res.push(nums.indexOf(recordNums[diff]));
			return res;
		 }
	}

	return [];
};

let nums = [3,2,4];
let target = 6;

console.log(twoSum(nums, target));