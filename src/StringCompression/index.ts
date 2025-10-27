function compress(chars: string[]): number {
  let s = '';
	let last = chars[0];
	let active = 0;
	let counter = 0;
	for(let i = 0; i < chars.length; i++){
		if( chars[i] !== last){
			s += last;
			if (counter !== 1 ) s += '' + counter;
			counter = 1;
			last = chars[i];
		} else {
			counter++;
		}
	}
	s += last;
	if (counter !== 1 ) s += '' + counter;
	let newS = s.split('');
	for(let i = 0; i <= chars.length; i++){
		if (chars[i] !== newS[i]){
			chars[i] = newS[i];
		}
	}
	return s.length;
};

const chars = ["a","a","b","b","c","c","c"];
//const chars = ["a"];
//const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars));