function uniqueOccurrences(arr: number[]): boolean {
	const hash: Record<number, number> = {};
	
	for(let i = 0; i < arr.length; i++){
		if(hash[arr[i]] == undefined){
			hash[arr[i]] = 1;
		}else{
			hash[arr[i]] = hash[arr[i]] + 1;
		}
	}

	const vals = Object.values(hash) as number[];
	const set = new Set(vals);
	const noCopies = [...set];
	if(vals.length === noCopies.length){
		return true;
	}
	return false;
};

const arr = [1,2,2,1,1,3];

console.log(uniqueOccurrences(arr));