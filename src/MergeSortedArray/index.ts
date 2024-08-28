// zamiast sprawdzanie czy nie jest 0 to sprawdzac czy left nie jest wieksze/rowne m? albo cos takiego
// in-place solution
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let left = m - 1;
	let right = n - 1;
	let last = m + n - 1;
	while (last >= 0){
		if (nums1[left] <= nums2[right] || left < 0){
			nums1[last] = nums2[right];
			right--;
			last--;
		}else if (nums1[left] > nums2[right] || right < 0){
			nums1[last] = nums1[left];
			left--;
			last--;
		}
	}
}


// let nums1 = [1,2,4,5,6,0],
//     m = 5,
//     nums2 = [3],
//     n = 1;
// let nums1 = [1,2,3,0,0,0],
//     m = 3,
//     nums2 = [2,5,6],
//     n = 3;
let nums1 = [4,5,6,0,0,0],
    m = 3,
    nums2 = [1,2,3],
    n = 3;
merge(nums1, m, nums2, n);


/*
// not in-place solution, but still works

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let left = 0;
	let right = 0;
	let res: number[] = [];
	while (left <= m && right <= n) {
		if (left >= m){
			res.push(nums2[right]);
			right++;
		}
		else if (right >= n){
			res.push(nums1[left]);
			left++;
		}else{
			if (nums1[left] <= nums2[right]){
				res.push(nums1[left]);
				left++;
			}else{
				res.push(nums2[right]);
				right++;
			}
		}
		
	}
	for(let i = 0; i < m+n; i++){
		nums1[i] = res[i];
	}
}

*/