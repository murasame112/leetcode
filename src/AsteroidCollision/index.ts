function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
	let pointer = 0;

	while(pointer < asteroids.length){
		let s = stack[stack.length-1];
		if(s > 0 && asteroids[pointer] < 0){
			let a = Math.abs(asteroids[pointer]);
			if(s > a){
				pointer++;
			}else if(s < a){
				stack.pop();
			}else{
				stack.pop();
				pointer++;
			}
		}else{
			stack.push(asteroids[pointer]);
			pointer++;
		}
	}

	return stack;
};

const asteroids = [5,10,-5];
//const asteroids = [8,-8];
//const asteroids = [10,2,-5];
//const asteroids = [3,5,-6,2,-1,4];
//const asteroids = [-2,-3,1,-2]; //-2 -2 -2
console.log(asteroidCollision(asteroids));