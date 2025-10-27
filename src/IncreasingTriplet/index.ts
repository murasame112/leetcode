//leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

//=== SOLUTION 1 ===
// function increasingTriplet(nums: number[]): boolean {
// 	if (nums.length < 3) return false;

// 	let a = 0, b = 1, c = 2;
// 	let buforA = 0;
// 	let lastB = nums[b]
// 	let flagCDiff = false;

// 	while(b <= nums.length - 2){
// 		if (nums[a] < nums[b] && nums[b] < nums[c])	return true;
// 		if (nums[b] < nums[buforA]) buforA = b;
	
// 		if (nums[b] <= nums[a]){
// 			b++;
// 			while (nums[b] == lastB && b < c){
// 				b++;
// 			}

// 			if (nums[buforA] < nums[a]){
// 				a = buforA;
// 			} 
// 			if (b >= c) c = b + 1;
// 		} else if (c != nums.length - 1){
// 			lastB = nums[b];
// 			flagCDiff = false;
// 			while(nums[c] <= nums[b] && c != nums.length - 1){
// 				c++;
// 				if(nums[c] != nums[a] && nums[c] != nums[b]) {
// 					flagCDiff = true;
// 				}
				
// 			}
// 			if(c >= nums.length - 1 && !flagCDiff) {
// 				return false;
// 			}
// 		} else {
// 			b++;
// 			while (nums[b] == lastB && b < c){
// 				b++;
// 			}
			
// 			c = b+1;
// 		}
// 	}

// 	return false;

// };

// === SOLUTION 2 - TWO POINTERS ===
function increasingTriplet(nums: number[]): boolean {
 let a = Number.MAX_SAFE_INTEGER, b = Number.MAX_SAFE_INTEGER;

 for(let i = 0; i < nums.length; i++){
	if (nums[i] <= a){
		a = nums[i];
	} else if (nums[i] <= b){
		b = nums[i];
	} else {
		return true;
	}
 }
 return false;

};
 

//const nums = [1,2,3,4,5];
//const nums = [5,4,3,2,1];
const nums = [2,6,1,7,4,6];
//const nums = [2,4,-2,-3];
//const nums = [20,100,10,12,5,13, 7];
//const nums = [1,1,1,1,1];
//const nums = [3,3,3,2,0,1,1];
//const nums = [1,1,1,1,1,1,1,1,1,1,1,3,7];
//const nums = [1,2,1,2,1,2,1,2,1,2];
//const nums = [1,0,-1,0,100000000];
//const nums = [1,6,2,5,1]
//const nums = [1,2,1,3];
console.log(increasingTriplet(nums));























/*
function increasingTriplet(nums: number[]): boolean {
    let first=Number.MAX_SAFE_INTEGER;
    let second=Number.MAX_SAFE_INTEGER;
    for(let number of nums){
        if(number<=first){
            first=number;
        } else if(number<=second){
            second=number;
        }else{
            return true;
        }
    }
    return false;
};
*/