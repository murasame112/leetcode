function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let i = 0;
	if(n > (flowerbed.length / 2) + 1){
		return false;
	}
	while(n > 0 && i < flowerbed.length){
		if((flowerbed[i-1] == 0 || !flowerbed[i-1]) && (flowerbed[i+1] == 0 || !flowerbed[i+1]) && flowerbed[i] == 0){
			n = n-1;
			flowerbed[i] = 1;
		}
		i++;
	}
	if(n == 0){
		return true;
	}
	return false;
};

// let flowerbed = [1,0,0,0,1];
// let n = 1;
let flowerbed = [0,0, 0];
let n = 1;

console.log(canPlaceFlowers(flowerbed, n));

// let flowerbed = [1,0,0,0,1];
// let n = 2;