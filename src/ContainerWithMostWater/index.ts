function maxArea(height: number[]): number {
	let a = 0, b = height.length - 1, highest = 0, res = 0;

	while(a <= b){
		if(height[a] <= height[b]){
			res = height[a] * (b - a);
			a++;
		}else{
			res = height[b] * (b - a);
			b--;
		}
		if(res > highest) highest = res;
	}
  return highest;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
//const height = [1, 8, 6, 2, 7];

console.log(maxArea(height));