function findDifference(nums1: number[], nums2: number[]): number[][] {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);

	const a1 = [...set1].filter((val) => !set2.has(val));
	const a2 = [...set2].filter((val) => !set1.has(val));

	return [a1, a2];
};


//const nums1 = [1,2,3], nums2 = [2,4,6];
//const nums1 = [1,2,3,3], nums2 = [1,1,2,2];
//const nums1 = [-68,-80,-19,-94,82,21,-43], nums2 = [-63]; // expected: [[-19,82,-68,21,-43,-94,-80],[-63]]
const nums1 = [1,2,3, 0, 6,3], nums2 = [1,1,2,2];
console.log(findDifference(nums1, nums2));



/*
--- solution 1 ---

function findDifference(nums1: number[], nums2: number[]): number[][] {
	let hash1: Record<number, number> = {}, hash2: Record<number, number> = {},saved1: Record<number, number> = {},saved2: Record<number, number> = {} ;

	for(let i = 0; i < nums1.length; i++){
		if(!hash1[nums1[i]]){
			hash1[nums1[i]] = 1;
		}
	}
	
	for(let i = 0; i < nums2.length; i++){
		if(!hash2[nums2[i]]){
			hash2[nums2[i]] = 1;
		}
	}
	const arr1: number[] = [], arr2: number[] = [];

	let i = 0;
	while(i < nums1.length || i < nums2.length){
		if(!hash2[nums1[i]] && !saved1[nums1[i]] && (nums1[i] || nums1[i] == 0)){
			arr1.push(nums1[i]);
			saved1[nums1[i]] = 1;
		} 
		if(!hash1[nums2[i]] && !saved2[nums2[i]] && (nums2[i] || nums2[i] == 0)){
			arr2.push(nums2[i]); 
			saved2[nums2[i]] = 1;
		} 
		i++;
	}

  let answer = [arr1, arr2];
	return answer;
};

*/