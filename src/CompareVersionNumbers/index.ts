
function compareVersion(version1: string, version2: string): number {
	let v1 = version1.split('.').map((element) => {
			return parseInt(element, 10);
	});

	let v2 = version2.split('.').map((element) => {
			return parseInt(element, 10);
	});

	let length = v1.length;
	let diff = 0;

	if (v1.length > v2.length) {
			length = v1.length;
			diff = v1.length - v2.length;
			v2 = v2.concat(Array(diff).fill(0));
			
	} else if (v2.length > v1.length) {
			length = v2.length;
			diff = v2.length - v1.length;
			v1 = v1.concat(Array(diff).fill(0));
	}

	for (let i = 0; i < length; i++) {
			if (v1[i] > v2[i]) {
					return 1;
			} else if (v1[i] < v2[i]) {
					return -1;
			}
	}

	return 0;
}

let version1 = '19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000';
let version2 = '101.1.100.0.01101.010.1.010.0.0.0.0.0.1.010.0.101.1.1.0.1.1.0.0.1.0.1.0.0.0.101.100.1.010.1.010.1.1.1.100.0.1.0.1.001.0.0.0.0.1.1.0.0.1.1.1.1.1.1.0.001.001.0.0.010.1.110.1.0.0.1.0110011.1.0.0.0.1.1.1.0.0.0.1.0.0.1.1.1.0.0.0.1.0.1.0.011.1.0.0.1.1.0.1.1.010.1.1.0.1.0.011.1.000.1.01000.0.1.0.0.0.101.010.1.1.1.1.0.1.1.0.1.1.0.1.0.1.1.0.0.1.1.0.1.0.0.1.0.100.1.1.1.1.011.1.0.0.0.0.0.0.1.0.0.1.0.1.010.0.1.0.0.1.0.0.0.001.1.1.0.1.1.1.0.0.0.0.1.0.0.1.1.0.0.1.0.1.00100.0.1.0.1.1.0.0.0.0.1.100.0.111.0.1.0';

console.log(compareVersion(version1, version2));



// two pointers solution
/*
function compareVersion(version1: string, version2: string): number {

	let left = 0;
	let right = 0;
	let v1 = 0;
	let v2 = 0;
	let leftDots = 0;
	let rightDots = 0;

	while (left < version1.length || right < version2.length){
		let str1 = '';
		if(leftDots > rightDots){
			return 1;
		} else if (leftDots < rightDots){
			return -1;
		}

		while(version1[left] !== '.' && left < version1.length){
			str1+= version1[left];
			left++;
		}
		if(version1[left] === '.'){
			leftDots++;
		}
		left++;
		
		v1 = parseInt(str1, 10);

		let str2 = '';
		while(version2[right] !== '.' && right < version2.length){
			str2+= version2[right];
			right++;
		}
		if(version2[right] === '.'){
			rightDots++;
		}
		right++;
		v2 = parseInt(str2, 10);

		if(v1 > v2){
			return 1;
		}else if (v1 < v2){
			return -1;
		}

	}
    return 0;
}
*/
