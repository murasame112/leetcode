function largestAltitude(gain: number[]): number {
	let start = 0, max = start;

	for(let i = 0; i < gain.length; i++){
		console.log(start);
		start += gain[i];
		if(max < start) max = start;
	}

  return max;
};

//const gain = [-5,1,5,0,-7];
const gain = [-4,-3,-2,-1,4,3,2];

console.log(largestAltitude(gain));