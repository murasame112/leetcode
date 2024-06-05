function climbStairs(n: number): number {
	let memory = new Map();

	for(let i = 1; i < n + 1; i++){
		memory.set(i, 0);
		for(let j = 1; j < 3; j++){	
			
			let subproblem = i - j; 
			if(subproblem == 0){ 
				let memoI = memory.get(i); 
				memory.set(i, memoI! + 1);
				
			}else if(subproblem < 0){ 
				continue;
			}else{
				let memoI = memory.get(i); 
				let memoJ = memory.get(subproblem);
				memory.set(i, memoI! + memoJ!);
			}
			
		}
	}
	return memory.get(n)!;
};

let n = 3;

console.log(climbStairs(n));