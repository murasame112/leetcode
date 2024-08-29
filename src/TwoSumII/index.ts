function twoSum(numbers: number[], target: number): number[] {
	let left = 0;
	let right = numbers.length - 1;
	while (1){
		if ((numbers[left] + numbers[right]) > target){
			right--;
		}else if ((numbers[left] + numbers[right]) < target){
			left++;
		}else {
			return [left + 1, right + 1];
		}
	}
	return [];
};

let numbers = [2,7,11,15];
let target = 9;

console.log(twoSum(numbers, target));