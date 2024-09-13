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

//const prices = [7,1,5,3,6,4];
const prices = [7,6,4,3,1];
console.log(maxProfit(prices));


// first solution (brute force);

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