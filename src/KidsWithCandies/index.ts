function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
	let highest = 0;
	for(let i = 0; i < candies.length; i++){
		if(highest < candies[i]){
			highest = candies[i];
		}
	}

	let result: boolean[] = [];
	for(let i = 0; i < candies.length; i++){
		if(candies[i] + extraCandies >= highest){
			result[i] = true;
		}else{
			result[i] = false;
		}
	}
    
	return result;
};

let candies = [2,3,5,1,3];
let extraCandies = 3;

// let candies = [4,2,1,1,2];
// let extraCandies = 1;
// let candies = [12,1,12];
// let extraCandies = 10;

console.log(kidsWithCandies(candies, extraCandies));