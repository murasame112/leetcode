function permute(nums: number[]): number[][] {
  
	let visited: boolean[] = [];
	let combination: number[] = [];
	let combinations: number[][] = [];



	const solve = (combination: number[], nums: number[], visited: boolean[], combinations: number[][])=>{
		if(combination.length == nums.length){
			combinations.push([...combination]);
			return;
		}
		for(let i = 0; i < nums.length; i ++){
			if(!visited[i]){
				visited[i] = true;
				combination.push(nums[i]);
				solve(combination, nums, visited, combinations);
				visited[i] = false;
				combination.pop();
			}
		}
		
	}


	solve(combination, nums, visited, combinations);

	return combinations;
};

let nums = [1,2,3];
console.log(permute(nums));
