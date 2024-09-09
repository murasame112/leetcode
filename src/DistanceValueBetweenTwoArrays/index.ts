function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
	arr2.sort((a, b) =>  a - b);
	let counter = 0;

	for (let i = 0; i < arr1.length; i++){
		let flag = false;
		let min = 0; 
		let max = arr2.length-1;
		let mid = Math.floor(min + (max - min)/2);
		if (max == 0){
			max = 1;
		}
		while (min <= max){
			let result = Math.abs(arr1[i] - arr2[mid]);
			
			if (result <= d){
				flag = true;
				break;
			} 
			if ( arr1[i] < arr2[mid]){
				max = mid - 1;
				mid = Math.floor(min + (max - min)/2);

			}else{
				min = mid + 1;
				mid = Math.floor(min + (max - min)/2);
			}
			

		}
		if(flag == false){
			counter++;
		}
	}
    
	return counter;
};

const arr1 = [-3,10,2,8,0,10];
const arr2: number[] = [-9,-1,-4,-9,-8];
const d = 9;
console.log(findTheDistanceValue(arr1, arr2, d));