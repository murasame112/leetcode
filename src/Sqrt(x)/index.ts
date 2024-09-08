// binary search practice
function mySqrt(x: number): number {
	if (x == 0){
		return 0;
	}
	if (x == 1){
		return 1;
	}
	let min: number = 0;
	let max: number = x;
	let mid: number = Math.floor(min + ((max - min)/2));
	let result = mid * mid;

	while (result != x && mid != min){
		if (result < x){
			min = mid;
			mid = Math.floor(min + ((max - min)/2));
		} else if (result > x){
			max = mid
			mid = Math.floor(min + ((max - min)/2));
		}
		result = mid * mid;
	}

  return mid;
};

const x = 41;
console.log(mySqrt(x));