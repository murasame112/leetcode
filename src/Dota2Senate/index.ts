function predictPartyVictory(senate: string): string {
	const radiant: number[] = [], dire: number[] = [];
	for(let i = 0; i < senate.length; i++){
		if(senate[i] === 'R') radiant.push(i);
		else dire.push(i); 
	}
	
	while(radiant.length > 0 && dire.length > 0){
		if(radiant[0] < dire[0]){
			radiant.push(radiant.shift()! + senate.length);
			dire.shift();
		}else{
			dire.push(dire.shift()! + senate.length);
			radiant.shift();
		}
	}

	if(radiant.length > dire.length){
		return 'Radiant';
	}else{
		return 'Dire';
	}
};

//2 tablice z kolejnosciaqmi wystapien
// R: 0 3 5 6 
// D: 1 2 4 7

//const senate = "DDRRR";
const senate = "RDDRDRRD";
//const senate = "RDD";
//const senate = "DDDRRRRR" // expected: Radiant

console.log(predictPartyVictory(senate));



/*
=== solution 1

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

*/