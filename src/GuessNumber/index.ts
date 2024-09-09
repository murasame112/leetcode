/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


 function guessNumber(n: number): number {
	// function from api, here was my example implementation used for testing
 	// let guess = function(num: number): number {
	// 	if(num == 6){
	// 		return 0;
	// 	}else if( num > 6){
	// 		return 1;
	// 	}else if (num < 6){
	// 		return -1;
	// 	}
	// 	return 0;
	// }

	let min = 1;
	let max = n;
	let mid = Math.floor(min + (max - min)/2);
	while (1){

		if (guess(mid) === 0){
			return mid;
		}else if (guess(mid) === 1){
			max = mid-1;
			mid = Math.floor(min + (max - min)/2);
		}else if (guess(mid) === -1){
			min = mid+1;
			mid = Math.floor(min + (max - min)/2);
		}
	}
	return mid;

 };

 const n = 10;
 console.log(guessNumber(n));