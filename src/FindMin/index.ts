function findMin(nums: number[]): number {
    let min = 0;
    let max = nums.length - 1;
    let mid = 0;

    while (min <= max) {
        mid = Math.floor(min + (max - min) / 2);

        if (nums[max] > nums[min]) {
            return nums[min];
        }
        if (nums[mid] > nums[min]) {
            min = mid;
        } else if (nums[mid] < nums[min]) {
            max = mid;
        } else {
            return Math.min(nums[min], nums[max]);
        }
    }

    return mid;
}

const nums = [5, 1, 2, 3, 4];
const nums2 = [2, 4, 5, 6, 7, 0, 1];
const nums3 = [11, 13, 15, 17];
console.log(findMin(nums3));

/*
			console.log('nums: ',nums);
			console.log('min: ', min);
			console.log('max: ', max);
			console.log('mid: ', mid);
			console.log('=============');
*/
