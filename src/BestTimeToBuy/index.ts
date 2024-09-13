function maxProfit(prices: number[]): number {
	let left = 0;
	let right = 1;
	let sum = 0;
	while (left < prices.length){

		if (prices[right] > prices[left]){
			sum = Math.max(sum, prices[right] - prices[left]);
		}else{
			left = right;
		}
		right++;
	}
    return sum;
};

// 2 - 6
const prices = [7,8,2,5,4,6,1,3];
//const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));

// second solution, faster, also with two pointers
/*
function maxProfit(prices: number[]): number {
	let left = 0;
	let right = 1;
	let sum = 0;
	while (left < prices.length){

		if (prices[right] > prices[left]){
			sum = Math.max(sum, prices[right] - prices[left]);
		}else{
			left = right;
		}
		right++;
	}
    return sum;
};

*/

// first solution (brute force, time limit exceeded);

/*
function maxProfit(prices: number[]): number {
	let left = 0;
	let right = 1;
	let sum = 0;
	while (left < prices.length){
		if (prices[right] - prices[left] > sum){
			sum = prices[right] - prices[left];
		}
		right++;
		if (right >= prices.length){
			left++;
			right = left + 1;
		}

	}
    return sum;
};

*/
