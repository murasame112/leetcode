function mergeKLists(arr: number[][]){
	let counter = arr.length;
	let sorted: number[][] = [];
	for(let i = 0; i < counter; i+=2){

		if(arr[i+1] !== undefined){
			let res = TwoWayMerge(arr[i], arr[i+1]);
			sorted.push(res);
		}else{
			sorted.push(arr[i]);
		}
	}
	if(sorted.length > 1){
		return mergeKLists(sorted);
	}else{
		return sorted;
	}
}


function TwoWayMerge(first: number[], second: number[]): number[]{
	let sorted: number[] = [];
	let left = 0;
	let right = 0;

	while((left != first.length+1 && right != second.length ) || ( left != first.length && right != second.length+1)){
		
		if(left == first.length){
			console.log("left ogr");
			sorted.push(second[right]);
			right++;
		}else if(right == second.length){
			console.log("right ogr");
			sorted.push(first[left]);
			left++;
		}else if(first[left] == second[right]){
			sorted.push(first[left]);
			sorted.push(second[right]);
			left++;
			right++;
		}else if(first[left] > second[right]){
			sorted.push(second[right]);
			right++
		}else if(first[left] < second[right]){
			sorted.push(first[left]);
			left++;
		}
	}
	return sorted;

}


let arr = [[1,4,5],[1,3,4],[2,6]];


console.log(mergeKLists(arr));
//console.log(TwoWayMerge([1, 2, 3, 4], [1, 3, 5, 7, 9]));