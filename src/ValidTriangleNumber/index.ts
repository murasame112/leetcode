function triangleNumber(nums: number[]): number {

	nums.sort();
	// Sort the array first, then use binary search to find the third value of a triangle.
	
	return 0;

}

const nums = [4, 2, 3, 4];
console.log(triangleNumber(nums));

// first solution, time limit exceeded

/*
function triangleNumber(nums: number[]): number {
    if (nums.length < 3) {
        return 0;
    }
    let a: number = 0;
    let b: number = 1;
    let c: number = 2;
    let counter: number = 0;
    let first: number;
    let second: number;
    let third: number;
    while (a <= nums.length - 3) {
			
        if (nums[a] > nums[b]) {
            first = nums[b];

            if (nums[a] > nums[c]) {
                second = nums[c];
                third = nums[a];
            } else {
                second = nums[a];
                third = nums[c];
            }
        } else {
            first = nums[a];
            if (nums[b] > nums[c]) {
                third = nums[b];
                second = nums[c];
            } else {
                second = nums[b];
                third = nums[c];
            }
        }

        if (first + second > third) {
            counter++;
        }

        if (c < nums.length - 1) {
            c++;
        } else {
            if (b < nums.length - 2) {
                b++;
                c = b + 1;
            } else {
                a++;
                b = a + 1;
                c = b + 1;
            }
        }
    }

    return counter;
}


*/