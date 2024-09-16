function minimumRecolors(blocks: string, k: number): number {
    let whiteCounter = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] == 'W') whiteCounter++;
    }
    let left = 0;
    let right = k;
    let smallestCount = whiteCounter;
		if (blocks.length == 1){
			return smallestCount;
		}
    while (right <= blocks.length) {
        if (blocks[left] == 'W') {
            whiteCounter--;
        }
        if (blocks[right] == 'W') {
            whiteCounter++;
        }
        smallestCount = Math.min(smallestCount, whiteCounter);
        left++;
        right++;
    }

    return smallestCount;
}

const blocks = 'BWBBWWBBBWBWWWBWWBBWBWBBWBB';
const k = 11;
console.log(minimumRecolors(blocks, k));

/*
		console.log('blocks left: ', blocks[left]);
		console.log('blocks right: ', blocks[right]);
		console.log('left: ', left);
		console.log('right: ', right);
		console.log('whiteCounter: ', whiteCounter);
		console.log('---------------');
*/
