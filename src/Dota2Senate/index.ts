function predictPartyVictory(senate: string): string {
	let rCount = 0, dCount = 0;
	const queue = [...senate];
	let checker = 0, deleter = 1;
	for(let i = 0; i < queue.length; i++){
		if(queue[i] === 'R') rCount++;
		else dCount++;
	}

	while(deleter != checker){

		if(queue[checker] !== queue[deleter] && deleter < queue.length){
			queue.splice(deleter, 1);
			if(deleter > checker) checker++;
			
			if(checker >= queue.length) checker = 0;
			deleter = checker + 1;
			
		}else{
			deleter++;
			if(deleter >= queue.length){
				deleter = 0;
			}
		}
	}
	if(queue[0] === 'D') return "Dire";
	else return "Radiant";
	

};

//const senate = "DDRRR";
//const senate = "RDDRDRRD";
//const senate = "RDD";
const senate = "DDDRRRRR" // expected: Radiant
console.log(predictPartyVictory(senate));