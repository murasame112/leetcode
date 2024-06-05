function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
	let start: number = 0;
	let end: number = 1;
	let mid: number = 0;
	let totalOnLeft: number = 0;
	let maxFraction = 0;
	let numerator = 0;
	let denominator = 0;
	while(1){ 
		mid = end +  (start - end) / 2;
		maxFraction = 0;
		numerator = 0;
		denominator = 0;
		for(let i = 0; i < arr.length; i++){
			for(let j = arr.length-1; j > i; j--){
				if(arr[i]/arr[j] < mid){
					totalOnLeft++;
					if(maxFraction < arr[i]/arr[j]){
						maxFraction = arr[i]/arr[j];
						numerator = arr[i];
						denominator = arr[j];
					}
				}else{
					break;
				}
			}
			
		}
		if(totalOnLeft > k){
			end = mid;
		}else if(totalOnLeft < k){
			start = mid;
		}else if(totalOnLeft == k){
			return[numerator, denominator];
		}
		totalOnLeft = 0;
	}

	return [];
 };


// Old answer, works but is not optimal
function kthSmallestPrimeFractionOld(arr: number[], k: number): number[] {
  

		let fracs: Record<number, string> = {};
		for(let i = 0; i < arr.length; i++){
			for(let j = i+1; j<arr.length; j++){
				fracs[(arr[i]/arr[j])] = arr[i]+"/"+arr[j];
			}
		}
	
		const sortedKeys = Object.keys(fracs).sort();
	
		let kthKey:number = parseFloat(sortedKeys[k-1]);
		let arr1 = fracs[kthKey].split('/');
	
		return [parseInt(arr1[0]), parseInt(arr1[1])];
	
};
	
//let arr = [1,2,3, 5]; 
//let	k = 3;
	
let arr = [1,29,47]
let k = 1
	
	
	
console.log(kthSmallestPrimeFraction(arr, k));
	
	
	