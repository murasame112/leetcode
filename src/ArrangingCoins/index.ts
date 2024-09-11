// binary search solution
function arrangeCoins(n: number): number {
    let min = 1;
    let max = n;

    while (min <= max) {
        let mid = Math.floor(min + (max - min) / 2);
        let sum = (mid * (mid + 1)) / 2; // gauss summation
        if (sum === n) {
            return mid;
        } else if (sum > n) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return max;
}
const n = 5;
console.log(arrangeCoins(n));

// first solution, based on intuition
/*
function arrangeCoins(n: number): number {
    let i = 1;
		let sum = 0;
		while (sum < n){
			
			i++;
			sum += i;
		}
		i--;
		return i

};

*/
